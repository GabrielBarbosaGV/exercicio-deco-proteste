import axios from "axios";

export const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchAllDistricts = async () => {
    const response = await axios.get(`${backendUrl}/districts`);
    return response.data;
};

export const fetchDistrictsByCountryId = async (countryId: number) => {
    const response = await axios.get(`${backendUrl}/districts/byCountry/${countryId}`)
    return response.data;
};