import axios from 'axios';

const API_BASE_URL = 'https://www.24h.com.vn/bong-da/ket-qua-thi-dau-cup-c1-champions-league-c48a398193.html'; 

export const getDataFromApi = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};
