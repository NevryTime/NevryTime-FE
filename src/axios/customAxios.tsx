import axios from 'axios';

const BASE_URL = 'http://3.37.153.9:8080';

export const customAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Credentials': true,
  },
});
