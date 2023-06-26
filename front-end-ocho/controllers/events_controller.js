const express = require('express')
const events = express.Router()
const Event = require('../models/event')

//EVENTS INDEX
events.get('/', (req, res) => {
  res.send(Event)
})

//NEW
events.get('/new', (req, res) => {
  res.send('/new New Events will go here')
})

//EDIT
events.get('/:arrayIndex/edit', (req, res) => {
  res.send('/edit route')
})

// SHOW EVENT
events.get('/:arrayIndex', (req, res) => {
    res.send(Event[req.params.arrayIndex])
  })
  

module.exports = events
