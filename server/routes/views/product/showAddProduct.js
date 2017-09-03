const path = require('path')
const User = require(path.join(__base, '/models/User'))
const async = require('async')

function showAddProduct (req, res) {
  const userId = req.cookies.user

  async.parallel({
    user: function (callback) {
      User.findById(userId, {avatarUrl: 1}, callback)
    }
  }, function (err, user) {
    if (err) throw err
    const site = { section: 'add-product-page'}
    const options = Object.assign({}, site, user)
    res.render('pages/add', options)
  })
}

module.exports = showAddProduct
