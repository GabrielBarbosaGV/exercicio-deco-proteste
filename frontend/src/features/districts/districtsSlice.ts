import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchAllDistricts } from './districtsAPI';
import { District } from './District';

export type DistrictStateStatus = 'unloaded' | 'loading' | 'loaded'| 'failed';

export interface DistrictsState {
    districts: District[],
    status: DistrictStateStatus
}

const initialState: DistrictsState = {
    districts: [],
    status: 'unloaded'
}

export const fetchAllDistrictsAsync = createAsyncThunk(
    'districts/fetchAll',
    async () => {
        return await fetchAllDistricts();
    }
);

export const districtsSlice = createSlice({
    name: 'districts',
    initialState,
    reducers: {
        setStatus: (state: DistrictsState, { payload }: PayloadAction<DistrictStateStatus>) => {
            state.status = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllDistrictsAsync.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchAllDistrictsAsync.fulfilled, (state, {payload}) => {
            state.status = 'loaded';
            state.districts = payload;
        })
    }
});

export const { setStatus } = districtsSlice.actions;

export const selectDistricts = (state: RootState) => state.districts.districts;

export const selectStatus = (state: RootState) => state.districts.status;

export default districtsSlice.reducer;