import axios from 'axios';

export const customAxios = axios.create({
  baseURL: 'https://port-0-nevrytime-be-1maxx2algrqkxj3.sel3.cloudtype.app',
  headers: {
    'Access-Control-Allow-Credentials': true,
  },
});
