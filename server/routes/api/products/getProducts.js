const path = require('path')
const Product = require(path.join(__base, '/models/Product'))
const _ = require('lodash')
const async = require('async')

function getProducts (req, res) {
  async.parallel({
    totalProduct: (callback) => {
      Product
            .find({}, callback)
    },
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
    activeProducts: (callback) => {
      Product
        .find({}, {is_Active: 1})
        .exec(callback)
    }
  }, function (err, results) {
    if (err) throw err
    const isActive = _.countBy(results.activeProducts, product => product.is_Active)
    res.json({ productsByDay: results.productsByDay, isActive, total: results.totalProduct.length })
  })
}

module.exports = getProducts
