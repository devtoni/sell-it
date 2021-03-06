const { Strategy, ExtractJwt } = require('passport-jwt')

const User = require(__base + '/models/User')
const SECRET = process.env.SECRET

const jwtOptions = {
  secretOrKey: SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const strategy = new Strategy(jwtOptions, (jwt_payload, done) => {
  console.log('paso por payload')
  User.findById(jwt_payload.id)
    .then(user => {
      if (user) done(null, user)
      else done(null, false)
    })
    .catch(err => done(err, false))
})

module.exports = strategy
