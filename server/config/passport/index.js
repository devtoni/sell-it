const passport = require('passport')

const jwtStrategy = require('./strategies/jwt')

passport.use(jwtStrategy.strategy)
passport.use(jwtStrategy.localLogin)

module.exports = passport
