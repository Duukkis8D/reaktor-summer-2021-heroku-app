module.exports = {
    /* Sets the needed CORS configuration to response header that is sent to the user's browser. */
    enableCors: ( app ) => {
        app.use( ( req, res, next ) => {
            res.header( 'Access-Control-Allow-Origin', '*' )
            next()
        } )
    }
}