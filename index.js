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

	// Reaktor Bad API URL
	const baseUrl = 'https://bad-api-assignment.reaktor.com/v2'

	// axios response interceptor. Request is sent again if the array of server response is empty.
	axios.interceptors.response.use( response => {
		console.log(
			'response.config.url in server response:', response.config.url,
			"response.headers['content-type'] in server response:", response.headers['content-type']
		)

		if( response.config.url.includes( 'availability' ) ) {
			if( response.data.response.length <= 2 ) {
				console.error( 
					'invalid server response detected with url:', response.config.url,
					'response.data.response.length:', response.data.response.length,
					'requesting data again...' 
				)
	
				return axios.get( response.config.url )
			}
		}

		return response
	}, error => {
		return Promise.reject( 'error occurred during API request:', error )
	} )

	// craft full URL, make request to Bad API and forward response
	if ( category !== undefined ) {
		console.log( 
			`requesting product data (name, color, price etc) with the following product 
			category query parameter:`, category 
		)

		axios
			.get( `${baseUrl}/products/${category}` )
			.then( response => {
				res.send( response.data )
			} ).catch( error => {
				console.error( 
					'error occurred while handling product data (name, color, price etc):', 
					error 
				)
			} )
	}
	else if ( manufacturer !== undefined ) {
		console.log( 
			`requesting product availability data with the following product manufacturer 
			query parameter:`, manufacturer 
		)

		axios
			.get( `${baseUrl}/availability/${manufacturer}` )
			.then( response => {
				res.send( response.data.response )
			} ).catch( error => {
				console.error( 
					'error occurred while handling product availability data:', 
					error 
				)
			} )
	}
	else {
		console.error( 'unidentified query parameter (neither product category nor manufacturer)' )
	}
} )

const PORT = process.env.PORT || 3001
app.listen( PORT, () => {
	console.log( `Server running on port ${PORT}` )
} )