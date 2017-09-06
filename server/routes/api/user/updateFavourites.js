const path = require('path')
const User = require(path.join(__base, '/models/User'))

function updateFavourites (req, res) {
  const { productId } = req.body
  const { user } = req
  console.log(productId)
  User
  .findByIdAndUpdate(user._id, { $push: {favourites: productId} })
  .then((ok) => res.send(ok))
}

module.exports = updateFavourites
