const path = require('path')
const Product = require(path.join(__base, '/models/Product'))

function showDetailProduct (req, res) {
  const { user } = req.cookies
  const { id } = req.params
  const section = 'product-detail-page'
  Product
     .findById(id)
     .then((product) => {
       res.render('pages/detail', {section, product, user})
     })
     .catch((e) => res.send(e))
}

module.exports = showDetailProduct
