const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
  name: String,
  number: Number,
  dateAdded: { type: Date, default: Date.now }
})

const Test = mongoose.models.Test || mongoose.model('Test', testSchema)

module.exports = Test
