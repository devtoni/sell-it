const path = require('path')
const Product = require(path.join(__base, '/models/Product'))
const _ = require('lodash')

function showDetailProduct (req, res) {
  const { user } = req
  const { id } = req.params
  const section = 'product-detail-page'

  const productByOwner = Product.findById(id).populate('createdBy')

  productByOwner
       .then((product) => {
         res.render('pages/detail', {section, product, user})
       })
     .catch((e) => res.send(e))
}

module.exports = showDetailProduct
