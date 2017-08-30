const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')
const User = require(__base + 'models/User')
const SECRET = process.env.SECRET || 'supersecret'

const localOptions = { usernameField: 'email' }

const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
  User.findOne({ email: email }, function (err, user) {
    console.log('hola')
    if (err) { return done(err) }
    if (!user) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }) }

    user.comparePassword(password, function (err, isMatch) {
      if (err) { return done(err) }
      if (!isMatch) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }) }

      return done(null, user)
    })
  })
})

const jwtOptions = {
  secretOrKey: 'supersecret',
  jwtFromRequest: ExtractJwt.fromHeader()
}

const strategy = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload._id, function (err, user) {
    console.log('holaj')
    if (err) { return done(err, false) }

    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
})

module.exports = {strategy, localLogin }
