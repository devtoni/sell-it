
const Product = require('../../../../models/Product')

function getProducts (req, res) {
  Product.find()
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
}

module.exports = getProducts
