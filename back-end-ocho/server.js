// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')


//CONFIGURATION
require('dotenv').config()
const app = express();
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
    )



app.listen(PORT, () => {
    console.log('listening on port', PORT)
})