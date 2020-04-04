require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise

const Test = require('./models/test')

const testSeed = [
  {
    name: 'Test 1',
    number: 1
  },
  {
    name: 'Test 2',
    number: 2
  },
  {
    name: 'Test 3',
    number: 3
  }
]

const deleteData = async () => {
  console.log('☔️ ☔️ ... dropping data')
  await Test.deleteMany()
  console.log('Data deleted. To seed, run\n\n\t npm run seed\n\n')
  process.exit()
}

const seedData = async () => {
  try {
    await Test.insertMany(testSeed)
    console.log(' 🌱 🌱 🌱 done. to delete data, run\n\n\t npm run unseed\n\n')
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
