// DEPENDENCIES
const express = require('express')


//CONFIGURATION
require('dotenv').config()
const app = express();
const PORT = process.env.PORT

// ROUTES
// HOMEPAGE
app.get('/', (req, res) => {
    res.send('Welcome to OchoMania')
})

// 404 Page
app.get('*', (req, res) => {
    res.send('404 Page Not Found')
})


app.listen(PORT, () => {
    console.log('listening on port', PORT)
})