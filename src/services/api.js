import axios from "axios";

const API_BASE_URL = 'http://localhost:8081';

export const createStudent = async(studentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/students`, studentData);
        return response.data;
    }
    catch(error) {
        throw error.response.data.message;
    }
};