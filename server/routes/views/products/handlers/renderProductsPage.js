
const getProductsList = require('../../../api/products/handlers/getProducts')

function getProducts (req, res) {
  getProductsList()
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
