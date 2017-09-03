const path = require('path')
const User = require(path.join(__base, '/models/User'))
const async = require('async')

function showHome (req, res) {
  const userId = req.cookies.user

  async.parallel({
    user: function (callback) {
      User.findById(userId, {avatarUrl: 1}, callback)
    }
  }, function (err, user) {
    if (err) throw err
    const site = { section: 'home'}
    const options = Object.assign({}, site, user)
    res.render('pages/home', options)
  })
}

module.exports = showHome
