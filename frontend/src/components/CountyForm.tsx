import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchAllCountriesAsync, selectCountries, selectStatus as selectCountriesStatus } from '../features/countries/countriesSlice';
import {
    selectDistrictsByCountryId,
    selectStatus as selectDistrictsStatus,
    setStatus as setDistrictsStatus,
    fetchDistrictsByCountryIdAsync
} from '../features/districts/districtsByCountryIdSlice';

interface CountyFormProps {
    onSubmit: (data: any) => void,
    disabled?: boolean
}

const CountyForm: React.FC<CountyFormProps> = ({onSubmit, disabled}) => {
    const { register, handleSubmit, watch } = useForm();

    const dispatch = useDispatch();

    const countries = useSelector(selectCountries);
    const districts = useSelector(selectDistrictsByCountryId);

    const countriesStatus = useSelector(selectCountriesStatus);
        
    const chosenCountryId = watch('countryId');

    useEffect(() => {
        if (countriesStatus === 'unloaded')
            dispatch(fetchAllCountriesAsync());
    }, [dispatch, countriesStatus]);

    useEffect(() => {
        if (chosenCountryId)
            dispatch(fetchDistrictsByCountryIdAsync(chosenCountryId));
    }, [chosenCountryId]);

    const InfoBlock = styled.div`
        margin: 10px 15px 0px 20px;
    `;

    const StyledInput = styled.input`
        background-color: blue;
        color: white;
        margin: 10px 0px 0px 20px;
        height: 30px;
        width: 80px;
        border-style: none;
        border-radius: 3px;
    `;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InfoBlock>
                <label>Country</label>
                <br />
                <select {...register("countryId")} disabled={disabled}>
                    {countries.map(country => <option value={country.id}>{country.name}</option>)}
                </select>
            </InfoBlock>

            <br />

            <InfoBlock>
                <label>District</label>
                <br />
                <select {...register("districtId")} disabled={disabled}>
                    {districts.map(district => <option value={district.id}>{district.name}</option>)}
                </select>
            </InfoBlock>

            <br />

            <InfoBlock>
                <label>Name</label>
                <br />
                <input {...register("name")} disabled={disabled} />
            </InfoBlock>
            
            <br />

            <InfoBlock>
                <label>Initial Zip Code</label>
                <br />
                <input {...register("initialZipCode")} disabled={disabled} />
            </InfoBlock>

            <br />

            <InfoBlock>
                <label>Final Zip Code</label>
                <br />
                <input {...register("finalZipCode")} disabled={disabled} />
            </InfoBlock>

            <InfoBlock>
                <label>Active</label>
                <input type="checkbox" {...register("active")} />
            </InfoBlock>

            <br />

            <StyledInput type="submit" />
        </form>
    );
};

export default CountyForm;