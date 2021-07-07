import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import countiesReducer from '../features/counties/countiesSlice';
import countriesReducer from '../features/countries/countriesSlice';
import districtsReducer from '../features/districts/districtsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counties: countiesReducer,
    countries: countriesReducer,
    districts: districtsReducer
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
