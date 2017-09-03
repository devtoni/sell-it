const path = require('path')
const Product = require(path.join(__base, '/models/Product'))
const User = require(path.join(__base, '/models/User'))

function deleteProduct (req, res) {
  const { id } = req.params

  User
      .update({product: id}, {$pull: { products: id }})
      .catch((e) => res.send(e))

  Product
      .findByIdAndRemove(id)
      .then(() => res.send(`Item with ID: ${id} has been removed`))
      .catch((e) => res.send(`FAIL!! Product w/ id ${id} was NOT removed`))
}

module.exports = deleteProduct
