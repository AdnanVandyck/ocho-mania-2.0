// require mongoose: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema:
const eventSchema = new Schema({
    venue: { type: String, required: true },
    date: String,
    image: String,
    bestSong: String,
    songArtist: String
})

// model and export: 
const Event = mongoose.model('Event', eventSchema)
module.exports = Event
