import nextConnect from 'next-connect'
import middleware from '../../../utils/middleware.js'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { reports } = await req.db.collections('reports').find({ category: 'shipping' })
  // console.log(data)
  res.json({ reports })
})

// handler.get(async (req, res) => {
//   Report.find({})
//     .then(data => {
//       res.status(200).json(data)
//     })
//     .catch(e => {
//       console.log(e)
//       res.status(401).send('.... awkward 🐢')
//     })
// })
export default handler
