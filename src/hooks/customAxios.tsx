import axios from 'axios';

const BASE_URL = 'https://port-0-nevrytime-be-1maxx2algrqkxj3.sel3.cloudtype.app'

export const customAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Credentials': true,
  },
});
