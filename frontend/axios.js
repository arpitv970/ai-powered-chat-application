import axios from 'axios';

const AxiosHelper = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: { 'Access-Control-Allow-Origin': '*' },
});

export default AxiosHelper;
