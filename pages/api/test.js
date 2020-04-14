import nextConnect from 'next-connect'
import middleware from '../../utils/middleware.js'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  res.send('TEST ME')
})

export default handler
