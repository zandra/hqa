import passport from 'passport'
import bcrypt from 'bcryptjs'
import { Strategy as LocalStrategy } from 'passport-local'
import { ObjectId } from 'mongodb'

// { usernameField: 'email', passwordField: 'password', passReqToCallback: true },

passport.serializeUser((user, done) => {
  done(null, user._id.toString())
})

passport.deserializeUser((req, id, done) => {
  req.db
    .collection('users')
    .findOne(ObjectId(id))
    .then((user) => done(null, user))
})

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    async (req, email, password, done) => {
      const user = await req.db.collection('users').findOne({ email })
      if (!user) return done(null, false, { message: 'That email was not found' })
      if (user && (await bcrypt.compare(password, user.password))) done(null, user)
      else done(null, false, { message: 'Error from passport config' })
    }
  )
)

export default passport
