import React from 'react';
import { useDispatch } from 'react-redux';
import CountyForm from '../components/CountyForm';
import { createCounty } from '../features/counties/countiesAPI';
import { createCountyAsync } from '../features/counties/countiesCreationSlice';
import { County } from '../features/counties/County';

const CountyCreation: React.FC = () => {
    const dispatch = useDispatch();

    const handleSubmit = ({
        name,
        initialZipCode,
        finalZipCode,
        active,
        districtId,
        countryId,
    }: any) => {
        const county: County = {
            name,
            initialZipCode,
            finalZipCode,
            active,
            country: { id: countryId },
            district: { id: districtId }
        };

        dispatch(createCountyAsync(county));
    };

    return <CountyForm onSubmit={handleSubmit} />;
}

export default CountyCreation;