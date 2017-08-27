const Products = require('../../../models/Product')
function getProducts (req, res) {
  Products.find()
  .then((productsList) => {
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
  .catch((e) => console.log(e))
}

module.exports = getProducts
