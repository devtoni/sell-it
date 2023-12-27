const path = require('path')
const async = require('async')
const Product = require(path.join(__base, '/models/Product'))
const Category = require(path.join(__base, '/models/Categories'))

function showProducts (req, res) {
  let user = ''
  const queries = {}
  if (req.user) {
    user = req.user
  }

  const { keyword, min, max, category, sortBy = 'price' } = req.query

  if (keyword) queries['title'] = new RegExp(keyword, 'i')
  if (category) queries['category'] = category
  if (min && max) queries['price'] = { '$gte': min, '$lte': max }
  queries['loc'] = {
    $nearSphere: user.coords
  }
  async.parallel({
    categories: (callback) => {
      Category
            .find({}, { title: 1 }, callback)
    },
    products: (callback) => {
      Product
            .find(queries)
            .sort(sortBy)
            .populate('createdBy')
            .exec(callback)
    }
  }, (err, results) => {
    if (err) throw err
    const options = { section: 'products-site', user, results }
    res.render('pages/products', options)
  })
}

module.exports = showProducts
