const express = require( 'express' )
const app = express()
const { request } = require('express')
app.use( express.static( 'build' ))

app.use( ( req, res, next ) => {
	res.header( 'Access-Control-Allow-Origin', process.env.ORIGIN || '*' )
	next()
} )

/*
GET /v2/products/:category – Return a listing of products in a given category.
GET /v2/availability/:manufacturer – Return a list of availability info.
The APIs are running at https://bad-api-assignment.reaktor.com/.
*/
app.get( '/api/products/gloves', ( req, res ) => {
	//const products = req.query[ 'products' ]
	//const availability = req.query[ 'availability' ]

	// craft Reaktor Bad API URL, now just hardcoded
	const url = 'https://bad-api-assignment.reaktor.com/v2/products/gloves'

	// make request to Bad API and forward response
	request( url ).pipe( res )
} )

const PORT = process.env.PORT || 3001
app.listen( PORT, () => {
	console.log( `Server running on port ${PORT}` )
} )