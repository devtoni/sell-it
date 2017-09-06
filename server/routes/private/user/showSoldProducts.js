const path = require('path')
const User = require(path.join(__base, '/models/User'))

function showSoldProducts (req, res) {
  const section = 'wishes'
  const { user } = req
  const wishes = User.findById(user._id).populate('favourites')
  wishes.then((user) => {
    res.render('pages/sold', { section, user })
  })
}
module.exports = showSoldProducts
