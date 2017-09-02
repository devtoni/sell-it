const path = require('path')
const User = require(path.join(__base, '/models/User'))

function getProfile (req, res) {
  const {id} = req.user
  User.findById(id)
  .populate('products')
  .then((user) => {
    res.render('pages/profile', { idSection: 'profile', user, footerPosition: '' })
  })
  .catch((e) => res.send('user not found'))
}

module.exports = getProfile

// user1 59a72f5ebc2bb42df4448e16
