const Product = require('../../../../models/Product')

function getProductDetail (req, res) {
  const { id } = req.params
  Product
     .findById(id)
     .then((product) => {
       res.render('pages/detail', {section: 'product-detail-page', product})
     })
     .catch((e) => res.send(e))
}

module.exports = getProductDetail
