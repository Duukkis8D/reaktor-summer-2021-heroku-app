const express = require( 'express' )
const axios = require( 'axios' )
const app = express()
app.use( express.static( 'build' ))

/* Sets the needed CORS configuration to response header that is sent to the user's browser. */
app.use( ( req, res, next ) => {
	res.header( 'Access-Control-Allow-Origin', '*' )
	next()
} )

const createProductDataPromise = ( baseUrl, productCategory, res ) => {
	axios
		.get( `${baseUrl}/products/${productCategory}` )
		.then( response => {
			console.log(
				'response.config.url in server response:', response.config.url, '\n',
				'response.status in server response:', response.status
			)

			res.send( response.data )
		} ).catch( error => {
			console.error( 'error occurred while handling product data (name, color, price etc):', error )
		} )
}

const createProductAvailabilityPromise = ( baseUrl, productManufacturer, res ) => {
	axios
		.get( `${baseUrl}/availability/${productManufacturer}` )
		.then( serverResponse => {
			const productAvailabilityData = serverResponse.data.response

			console.log(
				'serverResponse.config.url in server response:', serverResponse.config.url, '\n',
				'serverResponse.status in server response:', serverResponse.status
			)

			if( productAvailabilityData.length > 2 ) {
				res.send( productAvailabilityData )
			} else if( productAvailabilityData.length <= 2 ) {
				console.error( 
					'invalid server response detected with url:', serverResponse.config.url, '\n',
					'productAvailabilityData.length:', productAvailabilityData.length, '\n',
					'requesting data again...'
				)

				createProductAvailabilityPromise( baseUrl, productManufacturer, res )
			}
		} ).catch( error => {
			console.error( 'error occurred while handling product availability data:', error )
		} )
}

// axios response interceptor for logging responses.
/*axios.interceptors.response.use( response => {
	console.log(
		'response.config.url in server response:', response.config.url, '\n',
		'response.status in server response:', response.status
	)

	if( response.config.url.includes( 'availability' ) ) {
		if( response.data.response.length <= 2 ) {
			console.error( 
				'invalid server response detected with url:', response.config.url, '\n',
				'response.data.response.length:', response.data.response.length, '\n',
				'requesting data again...' 
			)
		}
	}
} )*/

/* Forwards the frontend request to Reaktor Bad API server and the response back to frontend.
GET /v2/products/:category – Return a listing of products in a given category: gloves, facemasks or beanies.
GET /v2/availability/:manufacturer – Return a list of availability info.
The APIs are running at https://bad-api-assignment.reaktor.com/. */
app.get( '/api', ( req, res ) => {
	const category = req.query.category
	const manufacturer = req.query.manufacturer

	// Reaktor Bad API URL
	const baseUrl = 'https://bad-api-assignment.reaktor.com/v2'

	// craft full URL, make request to Bad API and forward response
	if ( category !== undefined ) {
		console.log( 
			'product category query parameter for requesting product data (name, color, price etc):', 
			category 
		)

		createProductDataPromise( baseUrl, category, res )
	}
	else if ( manufacturer !== undefined ) {
		console.log( 
			'product manufacturer query parameter for requesting product availability data:', 
			manufacturer
		)

		createProductAvailabilityPromise( baseUrl, manufacturer, res )
	}
	else {
		console.error( 'unidentified query parameter (neither product category nor manufacturer)' )
	}
} )

const PORT = process.env.PORT || 3001
app.listen( PORT, () => {
	console.log( `Server running on port ${PORT}` )
} )