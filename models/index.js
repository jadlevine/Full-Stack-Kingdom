const mongoose = require('mongoose')
const AttractionSchema = require('./attraction')
const ScheduleSchema = require('./schedule')

const Attraction = mongoose.model('Attraction', AttractionSchema)

const Schedule = mongoose.model('Schedule', ScheduleSchema)

module.exports = {
  Attraction,
  Schedule
}
