import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchDistrictsByCountryId } from './districtsAPI';
import { District } from './District';

export type DistrictsByCountryIdStateStatus = 'unloaded' | 'loading' | 'loaded' | 'failed';

export interface DistrictsByCountryIdState {
    districtsByCountryId: District[],
    status: DistrictsByCountryIdStateStatus
}

const initialState: DistrictsByCountryIdState = {
    districtsByCountryId: [],
    status: 'unloaded'
}

export const fetchDistrictsByCountryIdAsync = createAsyncThunk(
    'districts/fetchByCountryId',
    async (countryId: number) => {
        return await fetchDistrictsByCountryId(countryId);
    }
);

export const districtsByCountryIdSlice = createSlice({
    name: 'districtsByCountryId',
    initialState,
    reducers: {
        setStatus: (state: DistrictsByCountryIdState, { payload }: PayloadAction<DistrictsByCountryIdStateStatus>) => {
            state.status = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDistrictsByCountryIdAsync.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchDistrictsByCountryIdAsync.fulfilled, (state, {payload}) => {
            state.status = 'loaded';
            state.districtsByCountryId = payload;
        });
    }
});

export const { setStatus } = districtsByCountryIdSlice.actions;

export const selectDistrictsByCountryId = (state: RootState) => state.districtsByCountryId.districtsByCountryId;

export const selectStatus = (state: RootState) => state.districtsByCountryId.status;

export default districtsByCountryIdSlice.reducer;