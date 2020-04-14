/* eslint-disable no-useless-return */
import nextConnect from 'next-connect'
import bcrypt from 'bcryptjs'
import middleware from '../../utils/middleware'
import { extractUser } from '../../utils/helpers'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  res.send('From the Users page')
})
// TODO add email validation
// TODO pre-check to make sure email is unique

handler.post(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400).send('There\'s only three fields ... let\'s try this again')
    return
  }
  if ((await req.db.collection('users').countDocuments({ email })) > 0) {
    res.status(403).send('The email has already been used.')
  }
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await req.db
    .collection('users')
    .insertOne({ email, password: hashedPassword, name })
    .then(({ ops }) => ops[0])

  // Note: passport.authenticate() middleware invokes req.login() automatically.
  req.logIn(user, (err) => {
    if (err) throw err
    res.status(201).json({
      user: (req.user)
    })
    // if (err) throw err
    // return res.redirect('/')
  })
})

export default handler
