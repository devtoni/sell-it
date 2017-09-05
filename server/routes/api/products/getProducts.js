const path = require('path')
const Product = require(path.join(__base, '/models/Product'))

function getProducts (req, res) {
  Product
         .aggregate([
           {
             $group: {
               _id: {
                 year: {$year: '$createdAt'},
                 month: {$month: '$createdAt'},
                 day: {$dayOfMonth: '$createdAt'},
                 minute: {$minute: '$createdAt'}
               },
               total: {$sum: 1}
             }
           }
         ])
         .then(products => res.json(products))
         .catch((e) => res.send(e))
}

module.exports = getProducts
