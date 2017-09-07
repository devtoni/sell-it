const path = require('path')
const User = require(path.join(__base, '/models/User'))

function showSoldProducts (req, res) {
  const section = 'wishes'
  const { user } = req
  const sold = User.findById(user._id).populate('products')
  sold.then((user) => {
    console.log(user)
    res.render('pages/sold', { section, user })
  })
}
module.exports = showSoldProducts
