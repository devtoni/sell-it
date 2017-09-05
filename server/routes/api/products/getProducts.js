const path = require('path')
const Product = require(path.join(__base, '/models/Product'))
const _ = require('lodash')
const async = require('async')

function getProducts (req, res) {
  async.parallel({
    productsByDay: (callback) => {
      Product
        .aggregate([{
          $group: {
            _id: {
              year: {
                $year: '$createdAt'
              },
              month: {
                $month: '$createdAt'
              },
              day: {
                $dayOfMonth: '$createdAt'
              }
            },
            total: {
              $sum: 1
            }
          }
        }])
        .exec(callback)
    },
    productsByCategory: (callback) => {
      Product
        .find({}, { category: 1})
        .exec(callback)
    }
  }, function (err, results) {
    if (err) throw err
    const productsCount = _.countBy(results.productsByCategory, product => product.category)
    res.json({productsByDay: results.productsByDay, productsCount})
  })
}

module.exports = getProducts
