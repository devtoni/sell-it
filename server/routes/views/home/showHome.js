const path = require('path')
const User = require(path.join(__base, '/models/User'))
const async = require('async')

function showHome (req, res) {
  if (req.user) {
    const { user } = req
    console.log(user)
    async.parallel({
      user: function (callback) {
        User.findById(user._id, {avatarUrl: 1}, callback)
      }
    }, function (err, user) {
      if (err) throw err
      const site = { section: 'home'}
      const options = Object.assign({}, site, user)
      res.render('pages/home', options)
    })
  } else {
    res.render('pages/home', { section: 'home' })
  }
}

module.exports = showHome
