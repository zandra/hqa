const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    trim: true,
    required: 'Please enter a first name'
  },
  last_name: {
    type: String,
    trim: true,
    required: 'Please enter a last name'
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: 'Email is required'
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is required'
  },
  dateAdded: { type: Date, default: Date.now }
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

module.exports = User
