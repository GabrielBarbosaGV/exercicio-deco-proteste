import axios from "axios";

export const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchAllCounties = async () => {
    const response = await axios.get(`${backendUrl}/countiesWithCountryAndDistrict`);
    return response.data;
}