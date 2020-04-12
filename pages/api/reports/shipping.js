import nextConnect from 'next-connect'
import middleware from '../../../utils/middleware.js'
import Report from '../../../models/reports'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const shipping = await Report.find({ category: 'shipping' })
  res.status(200).json(shipping)
})
export default handler
