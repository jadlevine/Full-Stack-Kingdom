const { Schema } = require('mongoose')

const ScheduleSchema = new Schema(
  {
    date: { type: String, required: true },
    attractions: [{ type: Schema.Types.ObjectId, ref: 'Attraction' }],
    timeBudget: { type: Number, required: true },
    notes: { type: String, required: false }
  },
  { timestamps: true }
)
module.exports = ScheduleSchema
