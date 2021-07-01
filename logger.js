module.exports = {
    // axios response interceptor for logging responses.
    axiosResponseInterceptor: ( axiosInstance ) => {
        axiosInstance.interceptors.response.use( response => {
            // Measure response length. Product category and availability type responses have different data structure.
            let responseLength = 0

            if( response.data.length ) { // product category type response
                responseLength = response.data.length
            } else if( response.data.response.length ) { // product availability type response
                responseLength = response.data.response.length
            }

            if( responseLength > 2 && response.status === 200 ) {
                console.log( 'valid Reaktor Bad API server response detected with URL:', response.config.url )
                console.log( 'status code:', response.status )
            } else if( response.status !== 200 ) {
                console.error( 'could not get data from Reaktor Bad API server, status code:', response.status )
            } else {
                console.error( 'invalid Reaktor Bad API server response detected with URL:', response.config.url )
                console.error( 'response length:', responseLength )
                console.error( 'frontend is (hopefully) going to request data again...' )
            }

            return response
        } )
    }
}