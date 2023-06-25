// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')


//CONFIGURATION
require('dotenv').config()
const app = express();
const PORT = process.env.PORT

// EVENTS
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
    )

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the OchoMania! API')
})

// Events 
const eventsController = require('./controllers/events_controller.js')
app.use('/events', eventsController)

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})