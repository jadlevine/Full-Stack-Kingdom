const { Schema } = require('mongoose')

const ScheduleSchema = new Schema(
  {
    date: { type: Date, required: true },
    attractions: [{ type: Schema.Types.ObjectId, ref: 'Attraction' }],
    timeBudget: { type: Number, required: true },
    notes: { type: String, required: true }
  },
  { timestamps: true }
)
module.exports = ScheduleSchema
