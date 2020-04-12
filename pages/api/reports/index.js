import nextConnect from 'next-connect'
import middleware from '../../../utils/middleware.js'
import Report from '../../../models/reports'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  Report.find({})
    .then(data => {
      res.status(200).json(data)
    })
    .catch(e => {
      console.log(e)
      res.status(401).send('.... awkward 🐢')
    })
})
export default handler
