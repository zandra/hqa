/* eslint-disable no-useless-return */
import nextConnect from 'next-connect'
import bcrypt from 'bcryptjs'
import middleware from '../../utils/middleware'
import User from '../../models/users'
import { extractUser } from '../../utils/helpers'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const users = await User.find()
  res.json(users)
})
// TODO add email validation
// TODO pre-check to make sure email is unique

handler.post(async (req, res) => {
  const { name, email, password } = req.body
  console.log(req.body)

  if (!name || !email || !password) {
    res.status(400).send('There\'s only three fields ... let\'s try this again')
    return
  }
  const hashedPassword = await bcrypt.hash(password, 10)

  User.create({ name: name, email: email, password: hashedPassword }, function (err, small) {
    if (err) return handleError(err)
  })

  res.status(201).json(user)
})

export default handler
