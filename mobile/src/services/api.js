import axios from 'axios';

const api = axios.create({
    baseURL: 'http://bethehero-backend-api.herokuapp.com'
});

export default api;