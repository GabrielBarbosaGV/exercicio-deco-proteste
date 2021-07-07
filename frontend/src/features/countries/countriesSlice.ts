import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchAllCountries } from './countriesAPI';
import { Country } from './Country';

export type CountriesStateStatus = 'unloaded' | 'loading' | 'loaded' | 'failed';

export interface CountriesState {
    countries: Country[],
    status: CountriesStateStatus
}

const initialState: CountriesState = {
    countries: [],
    status: 'unloaded'
}

export const fetchAllCountriesAsync = createAsyncThunk(
    'countries/fetchAll',
    async () => {
        return await fetchAllCountries();
    }
);

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setStatus: (state: CountriesState, { payload }: PayloadAction<CountriesStateStatus>) => {
            state.status = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllCountriesAsync.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchAllCountriesAsync.fulfilled, (state, {payload}) => {
            state.status = 'loaded';
            state.countries = payload;
        });
    }
});

export const { setStatus } = countriesSlice.actions;

export const selectCountries = (state: RootState) => state.countries.countries;

export const selectStatus = (state: RootState) => state.countries.status;

export default countriesSlice.reducer;