/* eslint-disable no-useless-return */
import nextConnect from 'next-connect'
import bcrypt from 'bcryptjs'
import middleware from '../../utils/middleware'
import User from '../../models/users'
import { extractUser } from '../../utils/helpers'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  User.find({})
    .then(data => {
      res.status(200).json(data)
    })
    .catch(e => {
      console.log(e)
      res.status(401).send('.... awkward 🐢')
    })
})
// TODO add email validation
// TODO pre-check to make sure email is unique

// handler.post(async (req, res) => {
//   const { name, email, password } = req.body

//   if (!name || !email || !password) {
//     res.status(400).send('There\'s only three fields ... let\'s try this again')
//     return
//   }
//   const hashedPassword = await bcrypt.hash(password, 10)

//   const user = await (new User(name, email, hashedPassword))
//   res.status(201).json(user)
// })

export default handler
