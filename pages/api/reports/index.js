import connectDb from '../../../utils/database.js'
import Report from '../../../models/reports'

const handler = (req, res) => {
  Report.find({})
    .then(data => {
      res.status(200).json(data)
    })
    .catch(e => {
      console.log(e)
      res.status(401).send('.... awkward 🐢')
    })
}
export default connectDb(handler)
