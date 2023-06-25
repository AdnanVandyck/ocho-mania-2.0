const express = require('express')
const events = express.Router()
const Event = require('../models/event.js')

module.exports = events

// Seed:
events.get('/seed', (req, res) => {
    Event.insertMany([
        {
            venue: "taj",
            date: "June 3, 2023",
            image: "public/seed images/Taj-June-3rd-2023.JPG",
            bestSong: "Talibans",
            songArtist: "Byron Messia"
    
    
        },
        {
            venue: "panda",
            date: "May 28, 2023",
            image: "public/seed images/Panda-May-28th-2023.JPEG",
            bestSong: "I just wanna rock",
            songArtist: "Lil Uzi Vert"
    
        },
        {
            venue: "333 lounge",
            date: "April 20, 2023",
            image: "public/seed images/333-Lounge-April-20th-2023.JPEG",
            bestSong: "Hypnotize",
            songArtist: "The Notorious B.I.G"
    
        },
    
    ]
    )
        .then(createdEvents => {
            res.json({
                message: "Seed successful!"
            })
        })
})

// Index:
events.get('/', (req, res) => {
    Event.find()
        .then(foundEvents => {
            res.json(foundEvents)
        })
})

// Show:
events.get('/:venue', (req, res) => {
    Event.findOne({ venue: req.params.venue})
        .then(foundEvent => {
            res.json(foundEvent)
        })
})