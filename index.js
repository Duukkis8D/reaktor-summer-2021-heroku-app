const express = require( 'express' )
const app = express()
app.use( express.static( 'build' ))

const corsMiddleware = require( './corsMiddleware' )
corsMiddleware.enableCors( app )

const axios = require( 'axios' )
const axiosInstance = axios.create()
const logger = require( './logger' ) // axios response interceptor for logging responses.
logger.axiosResponseInterceptor( axiosInstance )

const sendProductDataToFrontend = ( baseUrl, productCategory, res ) => {
	axiosInstance
		.get( `${baseUrl}/products/${productCategory}` )
		.then( response => {
			res.send( response.data )
		} ).catch( error => {
			console.error( 'error occurred while handling product data (name, color, price etc):', error )
		} )
}

const sendProductAvailabilityDataToFrontend = ( baseUrl, productManufacturer, res ) => {
	axiosInstance
		.get( `${baseUrl}/availability/${productManufacturer}` )
		.then( serverResponse => {
			const productAvailabilityData = serverResponse.data.response
			res.send( productAvailabilityData )
		} ).catch( error => {
			console.error( 'error occurred while handling product availability data:', error )
		} )
}

/* Forwards the frontend request to Reaktor Bad API server and the response back to frontend.
GET /v2/products/:category – Return a listing of products in a given category: gloves, facemasks or beanies.
GET /v2/availability/:manufacturer – Return a list of availability info.
The APIs are running at https://bad-api-assignment.reaktor.com/. */
app.get( '/api', ( req, res ) => {
	const productCategory = req.query.category
	const productManufacturer = req.query.manufacturer

	// Reaktor Bad API URL
	const baseUrl = 'https://bad-api-assignment.reaktor.com/v2'

	// craft full URL, make request to Bad API and forward response
	if ( productCategory !== undefined ) {
		sendProductDataToFrontend( baseUrl, productCategory, res )
	} else if ( productManufacturer !== undefined ) {
		sendProductAvailabilityDataToFrontend( baseUrl, productManufacturer, res )
	} else {
		console.error( 'unidentified query parameter (neither product category nor manufacturer)' )
	}
} )

const PORT = process.env.PORT || 3001
app.listen( PORT, () => {
	console.log( `Server running on port ${PORT}` )
} )