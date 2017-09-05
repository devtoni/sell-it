const path = require('path')
const User = require(path.join(__base, '/models/User'))

function getProfile (req, res) {
  const { user } = req
  User.findById(user._id)
  .populate('products')
  .then((user) => {
    console.log(user)
    res.render('pages/profile', { idSection: 'profile', user, footerPosition: '' })
  })
  .catch((e) => res.send('user not found'))
}

module.exports = getProfile

// user1 59a72f5ebc2bb42df4448e16
