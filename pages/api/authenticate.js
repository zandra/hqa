import connectDb from '../../utils/database'
import User from '../../models/users'

// from https://hoangvvo.com/blog/migrate-from-express-js-to-next-js-api-routes/
const handler = (req, res) => {
  const { email, password } = req.body

  User.findOne({ email: email }, function (err, user) {
    if (err) throw err
    user.comparePassword(password, function (err, isMatch) {
      if (err) throw err
    }).then(user.generateSessionId())
      .then(sessionId => {
        res
        // TODO change this to use next middleware for session handling
        // Learn what session handling is
          .setHeader('Set-Cookie', `sessionId=${sessionId}; HttpOnly; Secure`)
          .send(`yo, ${name}`)
      })
      .catch(e => {
        res.status(401).send('nooooope - unknown')
      })
  })
}

export default connectDb(handler)
