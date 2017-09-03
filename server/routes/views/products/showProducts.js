const path = require('path')
const async = require('async')
const Product = require(path.join(__base, '/models/Product'))
const Category = require(path.join(__base, '/models/Categories'))

function showProducts (req, res) {
  const user = req.cookies
  const queryElements = Object.keys(req.query).length
  const {keyword, min = 0, max = 25, category } = req.query

  const queries = {}
  if (keyword) queries['title'] = new RegExp(keyword, 'i')
  if (category) queries['category'] = category
  queries['price'] = { '$gte': min, '$lte': max }

  async.parallel({
    categories: function (callback) {
      Category
        .find({}, {title: 1}, callback)
    },
    productsFiltered: function (callback) {
      Product
        .find(queries)
        .populate('createdBy')
        .sort('price')
        .exec(callback)
    },
    products: function (callback) {
      Product.find()
        .populate('createdBy')
        .sort('price')
        .exec(callback)
    }
  }, function (err, results) {
    if (err) throw err
    var products = ''
    if (queryElements) {
      products = results.productsFiltered
    } else {
      products = results.products
    }
    const options = {
      section: 'products-site',
      user,
      products,
      categories: results.categories
    }
    res.render('pages/products', options)
  })
}

module.exports = showProducts

/*
async.parallel({
    products: function (callback) {
      Product.find()
             .populate('createdBy')
             .exec(callback)
    }
  }, function (err, products) {
    if (err) throw err
    console.log(products)
    const options = {
      site: 'products-site',
      user,
      products
    }
    console.log(options.products)
    res.render('pages/products', options)
  })

  */
