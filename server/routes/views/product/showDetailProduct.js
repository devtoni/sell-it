const path = require('path')
const Product = require(path.join(__base, '/models/Product'))

function showDetailProduct (req, res) {
  const { user } = req
  const { id } = req.params
  const section = 'product-detail-page'
  Product
     .findById(id)
     .populate('createdBy')
     .then((product) => {
       console.log(product)
       res.render('pages/detail', {section, product, user})
     })
     .catch((e) => res.send(e))
}

module.exports = showDetailProduct
