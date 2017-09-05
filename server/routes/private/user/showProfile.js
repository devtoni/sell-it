const path = require('path')
const User = require(path.join(__base, '/models/User'))
const async = require('async')

function showProfile (req, res) {
  const { id } = req.params
  const { user } = req
  const section = 'profile'
  if (user._id == id) {
    console.log(user)
    User.findById(user._id)
    .populate('products')
    .then((user) => {
      res.render('pages/profile', { section, user })
    })
    .catch((e) => res.send('user not found'))
  }
  if (user._id != id) {
    async.parallel({
      user: (callback) => {
        User
           .findById(user._id)
           .populate('products')
           .exec(callback)
      },
      otherUser: (callback) => {
        User
           .findById(id)
           .populate('products')
           .exec(callback)
      }
    }, (err, results) => {
      console.log(results.otherUser)
      if (err) throw err
      res.render('pages/public-profile', { section, user: results.user, otherUser: results.otherUser })
    })
  }
}

module.exports = showProfile
