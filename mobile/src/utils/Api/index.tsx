import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'http://192.168.0.171:3333/',
  headers: {
    "Content-type": "application-json"
  }
});