import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost/BS-AC/backend/html/',
    // headers` are custom headers to be sent
    headers: {'X-Requested-With': 'XMLHttpRequest'},
});

export default axiosClient;