// DEPENDENCIES
const express = require('express')
const cors = require('cors')

//CONFIGURATION
require('dotenv').config()
const app = express();
const PORT = process.env.PORT

// Events
const eventsController = require('./controllers/events_controller.js');
app.use('/events', eventsController)
app.use(cors())



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