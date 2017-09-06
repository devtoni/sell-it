const path = require('path')
const Product = require(path.join(__base, '/models/Product'))
const User = require(path.join(__base, '/models/User'))

function deleteProduct (req, res) {
  const { id } = req.params
  const { user } = req

  User
      .findByIdAndUpdate(user._id, {$pull: { products: id }})
      .then(console.log)
      .catch((e) => res.send(e))

  Product
      .findByIdAndRemove(id)
      .then(() => res.send(`Item with ID: ${id} has been removed`))
      .catch((e) => res.send(`FAIL!! Product w/ id ${id} was NOT removed`))
}

module.exports = deleteProduct
