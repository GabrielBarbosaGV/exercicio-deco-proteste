import React from 'react';
import { useSelector } from 'react-redux';
import { selectStatus as selectCountriesStatus } from '../features/countries/countriesSlice';

const CountyCreation: React.FC = () => {
    const loadingCountries = useSelector(selectCountriesStatus);
    return (null);
}

export default CountyCreation;