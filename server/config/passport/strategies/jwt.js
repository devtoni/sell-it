const { Strategy, ExtractJwt } = require('passport-jwt')

const User = require(__base + '/models/User')
const SECRET = process.env.SECRET

const jwtOptions = {
  secretOrKey: SECRET,
  jwtFromRequest: cookie
}

const strategy = new Strategy(jwtOptions, (jwt_payload, done) => {
  console.log(jwt_payload)
  console.log('paso por payload')
  User.findById(jwt_payload.id)
    .then(user => {
      if (user) done(null, user)
      else done(null, false)
    })
    .catch(err => done(err, false))
})

module.exports = strategy

function cookie (req) {
  var token = null
  if (req && req.cookies) {
    token = req.cookies['auth']
  }
  return token
}
