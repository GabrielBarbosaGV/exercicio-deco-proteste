import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchDistrictsByCountryId } from './districtsAPI';
import { District } from './District';

export interface DistrictsByCountryIdState {
    districtsByCountryId: District[],
    status: 'idle' | 'loading' | 'failed';
}

const initialState: DistrictsByCountryIdState = {
    districtsByCountryId: [],
    status: 'idle'
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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDistrictsByCountryIdAsync.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchDistrictsByCountryIdAsync.fulfilled, (state, {payload}) => {
            state.status = 'idle';
            state.districtsByCountryId = payload;
        });
    }
});

export const selectDistrictsByCountryId = (state: RootState) => state.districtsByCountryId.districtsByCountryId;

export const selectStatus = (state: RootState) => state.districtsByCountryId.status;

export default districtsByCountryIdSlice.reducer;