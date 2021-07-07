import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectCountries } from '../features/countries/countriesSlice';
import { selectDistrictsByCountryId } from '../features/districts/districtsByCountryIdSlice';

interface CountyFormProps {
    onSubmit: (data: any) => void,
    disabled?: boolean
}

const CountyForm: React.FC<CountyFormProps> = ({onSubmit, disabled}) => {
    const { register, handleSubmit } = useForm();

    const countries = useSelector(selectCountries);
    const districts = useSelector(selectDistrictsByCountryId);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Country</label>
            <select {...register("countryId")} disabled={disabled}>
                {countries.map(country => <option value={country.id}>{country.name}</option>)}
            </select>

            <label>District</label>
            <select {...register("districtId")} disabled={disabled}>
                {districts.map(district => <option value={district.id}>{district.name}</option>)}
            </select>

            <label>Name</label>
            <input {...register("name")} disabled={disabled} />

            <label>Initial Zip Code</label>
            <input {...register("initialZipCode")} disabled={disabled} />

            <label>Final Zip Code</label>
            <input {...register("finalZipCode")} disabled={disabled} />

            <input type="submit" />
        </form>
    );
};

export default CountyForm;