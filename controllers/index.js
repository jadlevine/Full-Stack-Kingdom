const { Attraction, Schedule } = require('../models')

const getAllAttractions = async (req, res) => {
  const attractions = await Attraction.find({})
  res.json(attractions)
}

const getAttraction = async (req, res) => {
  const attraction = await Attraction.find({
    _id: req.params.attractionid
  })
  res.json(attraction)
}

const getSchedule = async (req, res) => {
  const schedule = await Schedule.find({
    _id: req.params.scheduleid
  }).populate('attractions')
  res.json(schedule)
}

const createSchedule = async (req, res) => {
  const newSchedule = await Schedule.create(req.body)
  res.json(newSchedule)
}

const deleteSchedule = async (req, res) => {
  const deletedSchedule = await Schedule.findByIdAndDelete({
    _id: req.params.scheduleid
  })
  res.json(deletedSchedule)
}

const updateSchedule = async (req, res) => {
  const updatedSchedule = await Schedule.findByIdAndUpdate(
    {
      _id: req.params.scheduleid
    },
    //Check that this line works once front-end is ready to add an attraction to the schedule
    { $push: { attractions: req.body._id } }
  )
  res.json(updatedSchedule)
}

module.exports = {
  getAllAttractions,
  getAttraction,
  getSchedule,
  createSchedule,
  deleteSchedule,
  updateSchedule
}
