import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import countiesReducer from '../features/counties/countiesSlice';
import countriesReducer from '../features/countries/countriesSlice';
import districtsReducer from '../features/districts/districtsSlice';
import districtsByCountryIdReducer from '../features/districts/districtsByCountryIdSlice';
import countiesCreationReducer from '../features/counties/countiesCreationSlice';

export const store = configureStore({
  reducer: {
    counties: countiesReducer,
    countries: countriesReducer,
    districts: districtsReducer,
    districtsByCountryId: districtsByCountryIdReducer,
    countiesCreation: countiesCreationReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
