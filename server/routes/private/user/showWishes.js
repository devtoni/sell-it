const path = require('path')
const User = require(path.join(__base, '/models/User'))

function showWishes (req, res) {
  const section = 'wishes'
  const { user } = req
  const wishes = User.findById(user._id).populate('favourites')
  wishes.then((user) => {
    res.render('pages/wishes', { section, user })
  })
}
module.exports = showWishes
