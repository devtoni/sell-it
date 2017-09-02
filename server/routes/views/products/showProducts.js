const path = require('path')
const Product = require(path.join(__base, '/models/Product'))

function showProducts (req, res) {
  const user = req.cookies.user
  const options = {
    section: 'products-site',
    user
  }
  res.render('pages/products', options)
}

module.exports = showProducts
