import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost/BS-AC/backend/html/',
    mode: 'no-cors',
    // headers` are custom headers to be sent
    // headers: {'X-Requested-With': 'XMLHttpRequest',
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //             "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    //             "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    //             'Authorization': true},
    crossdomain: true,
    // withCredentials: true,
    // credentials: 'same-origin',
})

export default axiosClient;