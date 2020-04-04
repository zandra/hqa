const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
  key: String,
  title: String,
  category: {
    type: 'String',
    enum: ['shipping', 'order', 'sales', 'inventory', 'custom'],
    required: true
  },
  about: String,
  fields: [{ name: String, attributes: [], inventory: Boolean }],
  configs: []
})

const Report = mongoose.models.Report || mongoose.model('Report', reportSchema)

module.exports = Report
