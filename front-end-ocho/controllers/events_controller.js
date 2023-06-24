const express = require('express')
const events = express.Router()
const Event = require('../models/event')

//EVENTS INDEX
events.get('/', (req, res) => {
  res.send(Event)
})

// SHOW EVENT
events.get('/:arrayIndex', (req, res) => {
    res.send(Event[req.params.arrayIndex])
  })
  

module.exports = events
