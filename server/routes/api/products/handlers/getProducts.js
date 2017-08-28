const Products = require('../../../../models/Product')

function getProducts (req, res) {
  Products.find()
  .then((products) => res.json(products))
  .catch((error) => res.send(error))
}

module.exports = getProducts
