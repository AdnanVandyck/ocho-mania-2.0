// DEPENDENCIES
const express = require('express')


//CONFIGURATION
require('dotenv').config()
const app = express();
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})