import axios from "axios"
export const baseURL = 'http://11.11.1.117:8080/api';
const ApiManager = axios.create({
    baseURL: 'http://11.11.1.117:8080/api',
    responseType: 'json',
    withCredentials: 'true'
})

export default ApiManager