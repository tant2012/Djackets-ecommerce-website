import axios from "axios";

const instance = axios.create({
    baseURL: 'https://apiapp.tghomie.com/api',
    timeout: 10000,
})

export default instance