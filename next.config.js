require('dotenv').config()
module.exports = {
  publicRuntimeConfig: {
    MONGO_URI: process.env.MONGO_URI
  }
}
