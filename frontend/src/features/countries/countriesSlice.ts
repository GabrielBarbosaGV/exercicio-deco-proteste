import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchAllCountries } from './countriesAPI';
import { Country } from './Country';

export interface CountriesState {
    countries: Country[],
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CountriesState = {
    countries: [],
    status: 'idle'
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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllCountriesAsync.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchAllCountriesAsync.fulfilled, (state, {payload}) => {
            state.status = 'idle';
            state.countries = payload;
        });
    }
});

export const selectCountries = (state: RootState) => state.countries.countries;

export const selectStatus = (state: RootState) => state.countries.status;

export default countriesSlice.reducer;