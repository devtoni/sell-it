const path = require('path')
const Product = require(path.join(__base, '/models/Product'))

function editProduct (req, res) {
  const { price, title, description } = req.body
  const { id } = req.params
  const updateFile = {}

  if (price) updateFile.price = price
  if (title) updateFile.title = title
  if (description) updateFile.description = description

  Product
        .findByIdAndUpdate(id, updateFile)
        .then((file) => res.send('Todo ok'))
}

module.exports = editProduct
