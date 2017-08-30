const Product = require('../../../../models/Product')
const User = require('../../../../models/User')

function deleteProduct (req, res) {
  const { id } = req.params

  User
      .update({product: id}, {$pull: { products: id }})
      .then((user) => res.send(`Item with ID: ${id} has been removed from user`))
      .catch((e) => res.send(`FAIL!! Product w/ id ${id} was NOT removed from user`))

  Product
      .findByIdAndRemove(id)
      .then(() => res.send(`Item with ID: ${id} has been removed`))
      .catch((e) => res.send(`FAIL!! Product w/ id ${id} was NOT removed`))
}

module.exports = deleteProduct
