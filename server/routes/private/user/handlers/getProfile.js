const User = require('../../../../models/User')

function getProfile (req, res) {
  User.findById('59a725515cd3af1348efc890')
  .populate('products')
  .then((user) => {
    res.render('pages/profile', { idSection: 'profile', user, footerPosition: '' })
  })
  .catch((e) => res.send('user not found'))
}

module.exports = getProfile
