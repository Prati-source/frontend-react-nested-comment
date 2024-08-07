import axios from "axios";




let api;

if (process.env.REACT_APP_STAGE === 'development'){
 api = axios.create({
    baseURL: process.env.REACT_APP_DEV_URL,
    withCredentials: true
})
}
else{
    
     api = axios.create({
        baseURL: process.env.REACT_APP_SERVICE_URL,
        withCredentials: true
})
}

export async function requests  (url, options) {
    return api(url,options)
        .then(res => res.data)
        .catch(err => Promise.reject(err))
}


