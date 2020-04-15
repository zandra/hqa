import nextConnect from 'next-connect'
import passport from '../../utils/passport'
import middleware from '../../utils/middleware'
import { extractUser } from '../../utils/helpers'

const handler = nextConnect()

handler.use(middleware)

handler.post(passport.authenticate('local'), (req, res) => {
  res.json({ user: extractUser(req.user) })
})

handler.delete((req, res) => {
  req.logOut()
  console.log('goodbye')
  req.session.end()
  res.status(204).end()
})

export default handler
