const Product = require('../../../../models/Product')

function deleteProduct (req, res) {
  const { id } = req.params
  Product
        .findByIdAndRemove(id)
        .then(() => res.send(`Item with ID: ${id} has been removed`))
        .catch((e) => res.send(`FAIL!! Product w/ id ${id} was NOT removed`))
}

module.exports = deleteProduct
