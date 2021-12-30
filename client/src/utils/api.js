import axios from 'axios';
// import store from '../redux/store';

const api = axios.create({
  baseURL: `${window.location.origin}/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
