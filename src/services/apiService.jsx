import axios from 'axios';

const API_BASE_URL = 'https://disease.sh/v3/covid-19';

const api = axios.create({
  baseURL: API_BASE_URL,
}); //todas las solicitudes usarán esta URL base

export const getGlobalData = async () => {
  try {
    const response = await api.get('/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching global data', error);
    throw error;
  }
}; //solicitud GET a la ruta de la API para obtener los datos globales

export const getCountryData = async (country) => {
  try {
    const response = await api.get(`/countries/${country}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${country}`, error);
    throw error;
  }
}; //mediante country, realiza una solicitud GET a la ruta /countries/${country} de la API para obtener los datos del país especificado