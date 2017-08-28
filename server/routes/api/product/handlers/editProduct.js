const Product = require('../../../../models/Product')

function editProduct (req, res) {
  const { price, title, description, id } = req.body
  const updateFile = {}

  if (price) updateFile.price = price
  if (title) updateFile.title = title
  if (description) updateFile.description = description

  Product
        .findByIdAndUpdate(id, updateFile)
        .then((file) => res.send('Todo ok'))
}

module.exports = editProduct
