import axios from 'axios';

const API = axios.create({
  baseURL: 'http://192.168.10.16:3333',
});

export default API;
