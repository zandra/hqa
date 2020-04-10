import connectDb from '../../utils/database'
import User from '../../models/users'

const handler = (req, res) => {
  const { email, password } = req.body

  User.findOne({ email: email }, function (err, user) {
    if (err) throw err
    user.comparePassword(password, function (err, isMatch) {
      if (err) throw err
    })
    console.log(password, isMatch)
  })
}

export default connectDb(handler)
