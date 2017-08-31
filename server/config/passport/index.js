const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy
const jwtStrategy = require('./strategies/jwt')

const User = require(__base + '/models/User')

passport.use(new LocalStrategy({
  usernameField: 'email'
}, User.authenticate()))

passport.serializeUser(function (user, done) {
  done(null, user)
})
passport.deserializeUser(function (user, done) {
  done(null, user)
})

passport.use(jwtStrategy)

module.exports = passport
