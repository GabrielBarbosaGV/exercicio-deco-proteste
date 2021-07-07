import axios from "axios";

export const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchAllCounties = async () => {
    const response = await axios.get(`${backendUrl}/countiesWithCountryAndDistrict`);
    return response.data;
};

export const createCounty = async (newCounty: any) => {
    const response = await axios.post(`${backendUrl}/county`, newCounty);
    return response.data;
};