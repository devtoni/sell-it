const path = require('path')
const User = require(path.join(__base, 'models/User'))

function isAuthenticated (req, res, next) {
  User
      .findOne({})
      .then((user) => {
        req.body.userLog = user
        next()
      })
      .catch((e) => {
        next()
      })
}

module.exports = isAuthenticated
