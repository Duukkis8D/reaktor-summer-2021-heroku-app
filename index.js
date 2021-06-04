const express = require( 'express' )
const axios = require( 'axios' )
const app = express()
app.use( express.static( 'build' ))

/* Sets the needed CORS configuration to response header that is sent to the user's browser. */
app.use( ( req, res, next ) => {
	res.header( 'Access-Control-Allow-Origin', '*' )
	next()
} )

/* Forwards the frontend request to Reaktor Bad API server and the response back to frontend.
GET /v2/products/:category – Return a listing of products in a given category: gloves, facemasks or beanies.
GET /v2/availability/:manufacturer – Return a list of availability info.
The APIs are running at https://bad-api-assignment.reaktor.com/. */
app.get( '/api', ( req, res ) => {
	const category = req.query.category
	const manufacturer = req.query.manufacturer
	console.log( 'category query parameter: ', category )
	console.log( 'manufacturer query parameter: ', manufacturer )

	// Reaktor Bad API URL
	const baseUrl = 'https://bad-api-assignment.reaktor.com/v2'

	/* axios response interceptor. Request is sent again if the array of server response is empty. */
	axios.interceptors.response.use( response => {
		console.log(
			'response interceptor, response.config.url:', response.config.url,
			'response.data:', response.data
		)

		if( response.data.length <= 2 ) {
			console.log( 'invalid response detected from url:', response.config.url )

			return axios( {
				method: 'get',
				url: response.config.url,
				responseType: 'stream'
			} )
		}

		return response
	}, error => {
		return Promise.reject(error)	
	} )

	// craft full URL, make request to Bad API and forward response
	if ( category !== undefined ) {
		axios( {
			method: 'get',
			url: `${baseUrl}/products/${category}`,
			responseType: 'stream'
		} ).then( response => {
			console.log( 'category response:', res )
			response.data.pipe( res )
		} ).catch( error => {
			console.error( 'category error:', error )
		} )
	}
	else if ( manufacturer !== undefined ) {
		axios( {
			method: 'get',
			url: `${baseUrl}/availability/${manufacturer}`,
			responseType: 'stream'
		} ).then( response => {
			console.log( 'availability response:', res )
			response.data.pipe( res )
		} ).catch( error => {
			console.error( 'availability error:', error )
		} )
	}
	else {
		console.log( 'unidentified query parameter' )
	}
} )

const PORT = process.env.PORT || 3001
app.listen( PORT, () => {
	console.log( `Server running on port ${PORT}` )
} )