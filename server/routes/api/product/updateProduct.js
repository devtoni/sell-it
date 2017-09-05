const path = require('path')
const Product = require(path.join(__base, '/models/Product'))

function editProduct (req, res) {
  console.log('paso por edit')
  const { price, title, description } = req.body
  const { id } = req.params
  const updateFile = {}

  if (price) updateFile.price = price
  if (title) updateFile.title = title
  if (description) updateFile.description = description
  updateFile.createdAt = new Date('2017-09-01').getTime()
  Product
        .findByIdAndUpdate(id, updateFile)
        .then((file) => res.send('Todo ok'))
}

module.exports = editProduct
