import nextConnect from 'next-connect'
import middleware from '../../utils/middleware'
import User from '../../models/users'
import { extractUser } from '../../utils/helpers'

// from https://hoangvvo.com/blog/migrate-from-express-js-to-next-js-api-routes/
const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  console.log(req.body)
  const { name, password, email } = req.body
  const user = await User.find({ email: email }, function (err, user) {
    if (err) throw err
  })
  res.json(user)
})

export default handler
