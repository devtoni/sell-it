const Products = require('../../../../models/Product')

function getProducts (req, res) {
  return Products.find()
}

module.exports = getProducts
