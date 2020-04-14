require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
mongoose.Promise = global.Promise

const User = require('../../models/users')

const userSeed = [
  {
    name: 'Demo User',
    email: 'demo@hqa.com',
    password: 'password'
  },
  {
    name: 'Second User',
    email: 'second@hqa.com',
    password: 'password'
  }
]

const deleteData = async () => {
  console.log('☔️ ☔️ ... dropping data')
  await User.deleteMany()
  console.log('Data deleted. To seed, run\n\n\t npm run user:seed\n\n')
  process.exit()
}

const seedData = async () => {
  try {
    await User.insertMany(userSeed)
    console.log(' done 🌱 🌱 🌱 To drop data, run\n\n\t npm run user:drop\n\n')
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
