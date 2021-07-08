import React from 'react';
import { useDispatch } from 'react-redux';
import CountyForm from '../components/CountyForm';
import { createCountyAsync } from '../features/counties/countiesCreationSlice';
import { setStatus as setCountiesStatus } from '../features/counties/countiesSlice';
import { County } from '../features/counties/County';

interface CountyCreationProps {
    onCreate?: (county: County) => void
}

const CountyCreation: React.FC<CountyCreationProps> = ({ onCreate }) => {
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
        dispatch(setCountiesStatus('unloaded'));
        onCreate && onCreate(county);
    };

    return <CountyForm onSubmit={handleSubmit} />;
}

export default CountyCreation;