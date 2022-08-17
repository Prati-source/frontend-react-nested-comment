import axios from "axios";


const api = axios.create({
    baseURL: process.env.REACT_APP_SERVICE_URL,
    withCredentials: true
})

export async function requests  (url, options) {
    return api(url,options)
        .then(res => res.data)
        .catch(err => Promise.reject(err))
}