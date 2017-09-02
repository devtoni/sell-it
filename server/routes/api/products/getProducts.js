const path = require('path')
const Product = require(path.join(__base, '/models/Product'))

function getProducts (req, res) {
  const {sortBy} = req.query
  const distance = {
    $near: {
      $geometry: {
        type: 'Point',
        coordinates: [ 41, 2 ]
      }
    }
  }
  Product.find({coords: distance})
         .populate('createdBy')
         .then((products) => {
           res.json(products)
         })
         .catch((e) => res.send(e))
  // .catch((error) => res.send(error))
}

module.exports = getProducts

// Product.find()
// .populate('createdBy')
// .then(productsList => {
//   const categories = productsList
//                            .map((products) => products.category)
//                            .filter((category, index, categories) => categories.indexOf(category) === index)

//   console.log(productsList)
