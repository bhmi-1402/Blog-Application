import axios from 'axios';
const API_URL='http://localhost:9000';

const axiosIn=axios.create({
    basicURL:API_URL,
    timeout:100000,
    headers:{
        "Content-Type":"application/json"
    }
})
axiosIn.interceptors.request.use(
    function(config){
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)
axiosIn.interceptors.response.use(
    function(response){
        return processResponse(response);
    },
    function(error){
        return Promise.reject(processResponse(response));
    }
)