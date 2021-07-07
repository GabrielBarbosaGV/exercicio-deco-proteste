import axios from "axios";

export const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchAllCountries = async () => {
    const response = await axios.get(`${backendUrl}/countries`);
    return response.data;
}