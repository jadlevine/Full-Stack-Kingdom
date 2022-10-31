const { Schema } = require('mongoose')

const AttractionSchema = new Schema(
  {
    name: { type: String, required: true },
    waitTime: { type: Number, required: true },
    heightRestriction: { type: Number, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true }
  },
  { timestamps: true }
)
module.exports = AttractionSchema
