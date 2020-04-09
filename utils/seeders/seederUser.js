require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise

const User = require('../../models/users')

const userSeed = [
  {
    first_name: 'Demo',
    last_name: 'User',
    email: 'demo@hqa.com',
    password: 'password'
  },
  {
    first_name: 'Limited',
    last_name: 'User',
    email: 'limited@hqa.com',
    password: 'password'
  }
]

const deleteData = async () => {
  console.log('☔️ ☔️ ... dropping data')
  await User.deleteMany()
  console.log('Data deleted. To seed, run\n\n\t npm run userseed\n\n')
  process.exit()
}

const seedData = async () => {
  try {
    await User.insertMany(userSeed)
    console.log(' done 🌱 🌱 🌱 To drop data, run\n\n\t npm run userdrop\n\n')
    process.exit()
  } catch (e) {
    console.log('Error 🐼')
    console.log(e)
    process.exit()
  }
}

if (process.argv.includes('--delete')) {
  deleteData()
} else {
  seedData()
}
