const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy
const jwtStrategy = require('./strategies/jwt')

const User = require(__base + '/models/User')

passport.use(new LocalStrategy({
  usernameField: 'email'
}, User.authenticate()))

passport.serializeUser(User.authenticate())
passport.serializeUser(User.authenticate())
passport.use(jwtStrategy)

module.exports = passport
