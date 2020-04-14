const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter your name'
  },
  email: {
    type: String,
    trim: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  }
})
const User = mongoose.model.User || mongoose.model('User', userSchema)

module.exports = User
