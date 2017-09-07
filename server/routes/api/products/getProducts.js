const path = require('path')
const Product = require(path.join(__base, '/models/Product'))
const _ = require('lodash')

function getProducts (req, res) {
  const option = {
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
  }
  const totalProducts = Product.find({})
  const totalProductsByDay = Product.aggregate([option])
  const totalProductsPopulate = Product.find().populate('createdBy')

  Promise.all([totalProducts, totalProductsByDay, totalProductsPopulate])
         .then((results) => {
           const isActive = _.countBy(results[0], product => product.is_Active)
           res.json({ totalProductsQ: results[0].length, totalProductsByDay: results[1], isActive, totalProduct: results[2] })
         })
}

module.exports = getProducts
