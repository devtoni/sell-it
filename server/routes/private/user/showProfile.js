const path = require('path')
const User = require(path.join(__base, '/models/User'))

function showProfile (req, res) {
  const { user } = req
  const section = 'profile'
  User.findById(user._id)
      .populate('products')
      .then((user) => {
        res.render('pages/profile', { section, user })
      })
      .catch((e) => res.send('user not found'))
}

module.exports = showProfile
