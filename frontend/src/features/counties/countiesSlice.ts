import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchAllCounties } from "./countiesAPI";
import { County } from "./County";

export type CountiesStateStatus = 'unloaded' | 'loading' | 'loaded' | 'failed';

export interface CountiesState {
    counties: County[];
    status: CountiesStateStatus
}

const initialState: CountiesState = {
    counties: [],
    status: 'unloaded'
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
    reducers: {
        setStatus: (state: CountiesState, { payload }: PayloadAction<CountiesStateStatus>) => {
            state.status = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllCountiesAsync.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchAllCountiesAsync.fulfilled, (state, {payload}) => {
            state.status = 'loaded';
            state.counties = payload;
        });
    }
});

export const { setStatus } = countiesSlice.actions;

export const selectCounties = (state: RootState) => state.counties.counties;

export const selectStatus = (state: RootState) => state.counties.status;

export default countiesSlice.reducer;