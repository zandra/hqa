require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise

const Report = require('../../models/reports')
const reportData = require('../../data/reportData.json')

const deleteData = async () => {
  console.log('☔️ ☔️ ... dropping data')
  await Report.deleteMany()
  console.log('REPORT data deleted. To seed, run\n\n\t npm run report:seed\n\n')
  process.exit()
}

const seedData = async () => {
  try {
    await Report.insertMany(reportData)
    console.log(' 🌱 🌱 🌱 done. to delete data, run\n\n\t npm run report:drop\n\n')
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
