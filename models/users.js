const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

SALT_WORK_FACTOR = 10

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
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  },
  dateAdded: { type: Date, default: Date.now }
})

// TODO add a pre-save hook to check for email in db

// bcrypt pre-save hook
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err)
    // hash the password along with our new salt
    bcrypt.hash(this.password, salt, function (err, hash) {
      if (err) return next(err)
      this.password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function (input, cb) {
  bcrypt.compare(input, this.password, function (err, isMatch) {
    if (err) return cb(err)
    cb(null, isMatch)
  })
}

const User = mongoose.model.user || mongoose.model('User', userSchema)

module.exports = User
