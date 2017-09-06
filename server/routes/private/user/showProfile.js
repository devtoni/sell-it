const path = require('path')
const User = require(path.join(__base, '/models/User'))
const async = require('async')
const _ = require('lodash')

function showProfile (req, res) {
  console.log('Heyyyy')
  const { id } = req.params
  const { user } = req
  const section = 'profile'
  if (user._id.toString() == id.toString()) {
    User.findById(user._id)
    .populate('products')
    .then((user) => {
      console.log(user)
      const totalProducts = _.countBy(user.products, product => product.is_Active)
      const activeProducts = totalProducts.true
      const noActiveProducts = totalProducts.false
      res.render('pages/profile', { section, user, activeProducts, noActiveProducts })
    })
    .catch((e) => res.send('user not found'))
  }
  if (user._id.toString() != id.toString()) {
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
      console.log(results)
      if (err) throw err
      const activeProducts = _.countBy(results.user.products, product => product.is_Active)
      const noActiveProducts = _.countBy(results.user.products, product => !product.is_Active)
      res.render('pages/public-profile', { section, user: results.user, otherUser: results.otherUser, activeProducts, noActiveProducts })
    })
  }
}

module.exports = showProfile
