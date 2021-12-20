import axios from 'axios';
// import store from '../redux/store';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
