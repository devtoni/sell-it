const path = require('path')
const User = require(path.join(__base, '/models/User'))

function getUsers (req, res) {
  User.find()
  .then((users) => res.json(users))
  .catch((error) => res.send(error))
}

module.exports = getUsers
