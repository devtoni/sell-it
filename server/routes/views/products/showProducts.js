const path = require('path')
const async = require('async')
const User = require(path.join(__base, '/models/User'))
const Product = require(path.join(__base, '/models/Product'))
const Category = require(path.join(__base, '/models/Categories'))

function showProducts (req, res) {
  const userId = req.cookies.user
  const queryElements = Object.keys(req.query).length
  const { keyword, min = 0, max = 100000, category, sortBy = 'price' } = req.query
  const queries = {}
  if (keyword) queries['title'] = new RegExp(keyword, 'i')
  if (category) queries['category'] = category
  if (min && max) queries['price'] = { '$gte': min, '$lte': max }
  User
    .findById(userId, {
      coords: 1,
      avatarUrl: 1
    })
    .then(data => {
      const {coords} = data
    //  queries['coords'] = { $near: coords }
      async.parallel({
        categories: function (callback) {
          Category
            .find({}, {
              title: 1
            }, callback)
        },
        productsFiltered: function (callback) {
          Product
            .find(queries)
            .sort(sortBy)
            .populate('createdBy')
            .exec(callback)
        },
        products: function (callback) {
          Product.find()
            .sort(sortBy)
            .populate('createdBy')
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
        const user = { user: userId, avatarUrl: data.avatarUrl}
        const options = {
          section: 'products-site',
          user,
          products,
          categories: results.categories
        }
        res.render('pages/products', options)
      })
    })
}

module.exports = showProducts
