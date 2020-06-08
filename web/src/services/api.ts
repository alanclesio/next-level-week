import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nlw-server.herokuapp.com'
});

export default api;