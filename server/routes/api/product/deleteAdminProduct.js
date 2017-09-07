const path = require('path')
const Product = require(path.join(__base, '/models/Product'))
const mongoose = require('mongoose')

function deleteProduct (req, res) {
  const { id } = req.params

  const removeFromProduct = Product.findByIdAndRemove(id)
  removeFromProduct
         .then((result) => res.send('Todo Ok'))
         .catch((e) => res.send(e))
}

module.exports = deleteProduct
