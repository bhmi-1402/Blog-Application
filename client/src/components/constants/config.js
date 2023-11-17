export const API={
    loading:{
        title:'Loading...',
        message:'Data is being loaded,Please wait'

    },
    success:{
        title:'Success',
        message:'data successfully loaded'
    },
    responseFailure: {
        title:'Error',
        message:'An error occur while fetching response from the server. Please try again'

    },
    requestFailure:{
         title:'Error',
         message:'An error occur while parsing request data'
    },
    networkError:{
        title:'Error',
        message:'unable to connect with the server.Please check internet connectivity and try again later'
    }
}

export const SERVICE={
    userSignup:{
        url:'/signup',method:'POST'
    }
}