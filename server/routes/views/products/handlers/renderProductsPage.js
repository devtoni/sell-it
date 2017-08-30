
const Product = require('../../../../models/Product')

function getProducts (req, res) {
  Product.find()
  .populate('createdBy')
  .then(productsList => {
    const categories = productsList
                             .map((products) => products.category)
                             .filter((category, index, categories) => categories.indexOf(category) === index)
    const options = {
      idSection: 'products',
      productsList,
      categories
    }
    res.render('pages/products', options)
  })
  .catch((e) => res.render('pages/products'))
}

module.exports = getProducts
