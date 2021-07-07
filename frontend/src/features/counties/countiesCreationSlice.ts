import { createAsyncThunk, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { createCounty } from './countiesAPI';
import { CountiesPersistenceState, CountiesPersistenceStateStatus, initialCountiesPersistenceState } from './countiesPersistence';
import { County } from './County';


export const createCountyAsync = createAsyncThunk(
    'counties/createCounty',
    async (newCounty: County) => {
        return await createCounty(newCounty);
    }
);

export const countiesCreationSlice = createSlice({
    name: 'countyCreation',
    initialState: initialCountiesPersistenceState,
    reducers: {
        setStatus: (state: CountiesPersistenceState, { payload }: PayloadAction<CountiesPersistenceStateStatus>) => {
            state.status = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createCountyAsync.pending, (state) => {
            state.status = 'creating';
        });
        builder.addCase(createCountyAsync.fulfilled, (state, { payload }) => {
            state.status = 'done';
        });
    }
});

export const { setStatus } = countiesCreationSlice.actions;

export const selectStatus = (state: RootState) => state.countiesCreation.status;

export default countiesCreationSlice.reducer;