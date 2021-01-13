import axios from 'axios'

let instance = axios.create({
    // baseURL: 'http://127.0.0.1:8080',
    timeout: 5000,
    headers: {
        'Content-Type':'application/json;charset=utf-8'
    }
})

instance.interceptors.request.use(function (config){
    return config
},function (error){
    return Promise.reject(error);
})
instance.interceptors.response.use(function (config){
    return config
},function (error){
    return Promise.reject(error);
})

export default instance
