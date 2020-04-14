import nextConnect from 'next-connect'
import { session } from 'next-session'
import passport from '../../utils/passport'
import middleware from '../../utils/middleware'
import { extractUser } from '../../utils/helpers'

const handler = nextConnect()

handler.use(middleware)

handler.post(passport.authenticate('local'), (req, res) => {
  res.json({ user: extractUser(req.user) })
})

handler.delete((req, res) => {
  console.log('goodbye')
  req.logOut()
  res.status(204).end()
})

export default handler
