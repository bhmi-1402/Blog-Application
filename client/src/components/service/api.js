import axios from 'axios';
const {API,SERVICE}=require('../constants/config')
const API_URL='http://localhost:9000';

const axiosIn = axios.create({
    baseURL:API_URL,
    timeout:100000,
    headers:{
        "content-Type":"application/json"
    }
});
axiosIn.interceptors.request.use(
    function(config){
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
);                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
axiosIn.interceptors.response.use(
    function(response){
        return processResponse(response);
    },
    function(error){
        return Promise.reject(processError(error));
    }
)
const processResponse=(response)=>{
if(response?.status===200){
    return{ isSuccess:true,data: response.data}
}
else{
    return{
        isFailure:true,
        status:response?.status,
        msg: response?.msg,
        code: response?.code
    }
}
}
const processError=(error)=>{
    if(error.response){
 console.log("ERROR in response",error.toJSON());
 return {
    isError:true,
    msg:API.responseFailure,
    code:error.response.status
    // code:""
 }
    }else if(error.request){
        console.log("ERROR in request",error.toJSON());
        return {
           isError:true,
           msg:API.requestFailure,
           code:""
        }
    }
    else{
        console.log("ERROR in network",error.toJSON());
        return {
           isError:true,
           msg:API.networkError,
           code:""
        }
    }
}
const AP=()=>{};

for (const [key,value] of Object.entries(SERVICE)){
    AP[key]=(body,showUploadProgress,showDownloadProgress)=>
        axiosIn({
            method:value.method,
            url:value.url,
            data:body,
            responseType:value.responseType,
            onUploadProgress: function(progressEvent){
                if(showUploadProgress){
                    let percent=Math.round((progressEvent.loaded*100)/progressEvent.total)
                    showUploadProgress(percent);
                }
            },
            onDownloadProgress: function(progressEvent){

                if(showDownloadProgress){
                    let percent=Math.round((progressEvent.loaded*100)/progressEvent.total)
                    showDownloadProgress(percent);
                }
            }

        });
    
}
// export {AP};
export {AP};


