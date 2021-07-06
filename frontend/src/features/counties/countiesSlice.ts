import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchAllCounties } from "./countiesAPI";
import { County } from "./County";

export interface CountiesState {
    counties: County[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CountiesState = {
    counties: [],
    status: 'idle'
};

export const fetchAllCountiesAsync = createAsyncThunk(
    'counties/fetchAll',
    async () => {
        return await fetchAllCounties();
    }
);

export const countiesSlice = createSlice({
    name: 'counties',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllCountiesAsync.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchAllCountiesAsync.fulfilled, (state, {payload}) => {
            state.status = 'idle';
            state.counties = payload;
        });
    }
});

export const selectCounties = (state: RootState) => state.counties.counties;

export const selectStatus = (state: RootState) => state.counties.status;

export default countiesSlice.reducer;