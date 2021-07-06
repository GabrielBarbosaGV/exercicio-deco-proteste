import axios from "axios";

export const backendUrl = process.env.BACKEND_URL;

export const fetchAllCounties = async () => {
    const response = await axios.get(`${backendUrl}/counties`);
    return response.data;
}