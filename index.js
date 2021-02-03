const express = require( 'express' )
const app = express()

const baseUrl = 'https://bad-api-assignment.reaktor.com/v2'
const glovesUrl = `${baseUrl}/products/gloves`

app.get( glovesUrl, ( req, res ) => {
    console.log( res.data )
})

const PORT = process.env.PORT || 3001
app.listen( PORT, () => {
  console.log( `Server running on port ${PORT}` )
})