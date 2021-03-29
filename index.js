const express = require( 'express' )
const request = require( 'request' )
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

	// craft full URL, make request to Bad API and forward response
	if ( category !== '' ) {
		request( `${baseUrl}/products/${category}` ).pipe( res )
	}
	else if ( manufacturer !== '' ) {
		console.log( 'manufacturer ', manufacturer, ' response: ', res )
		request( `${baseUrl}/availability/${manufacturer}` ).pipe( res )
	}
	else {}
} )

const PORT = process.env.PORT || 3001
app.listen( PORT, () => {
	console.log( `Server running on port ${PORT}` )
} )