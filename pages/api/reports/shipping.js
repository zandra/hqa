import nextConnect from 'next-connect'
import middleware from '../../../utils/middleware.js'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  // const shipping = await Report.find({ category: 'shipping' })
  res.status(200).json()
})
export default handler
