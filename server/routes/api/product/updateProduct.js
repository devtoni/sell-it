const path = require('path')
const Product = require(path.join(__base, '/models/Product'))

function editProduct (req, res) {
  console.log('paso por edit')
  const { price, title, description, is_Active } = req.body
  const { id } = req.params
  const { user } = req
  const updateFile = {}
  console.log(is_Active)
  if (price) updateFile.price = price
  if (title) updateFile.title = title
  if (description) updateFile.description = description
  if (is_Active) updateFile.is_Active = is_Active

  Product
        .findByIdAndUpdate(id, updateFile)
        .then((file) => res.send(file))
}

module.exports = editProduct
