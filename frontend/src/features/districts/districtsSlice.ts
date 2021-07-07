import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchAllDistricts } from './districtsAPI';
import { District } from './District';

export interface DistrictsState {
    districts: District[],
    status: 'idle' | 'loading' | 'failed';
}

const initialState: DistrictsState = {
    districts: [],
    status: 'idle'
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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllDistrictsAsync.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchAllDistrictsAsync.fulfilled, (state, {payload}) => {
            state.status = 'idle';
            state.districts = payload;
        })
    }
});

export const selectDistricts = (state: RootState) => state.districts.districts;

export const selectStatus = (state: RootState) => state.districts.status;

export default districtsSlice.reducer;