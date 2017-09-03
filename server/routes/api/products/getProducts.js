const path = require('path')
const Product = require(path.join(__base, '/models/Product'))

function getProducts (req, res) {
  // const {sortBy} = req.query
  // const distance = {
  //   $near: {
  //     $geometry: {
  //       type: 'Point',
  //       coordinates: [ 41, 2 ]
  //     }
  //   }
  // }
  Product.find()
         .populate('createdBy')
         .then((products) => {
           callback(products)
         })
         .catch((e) => res.send(e))
}

module.exports = getProducts

// Product.find()
// .populate('createdBy')
// .then(productsList => {
//   const categories = productsList
//                            .map((products) => products.category)
//                            .filter((category, index, categories) => categories.indexOf(category) === index)

//   console.log(productsList)

// Product
// .find()
// .populate('createdBy')
// .then(products => {
//   const options = {
//     site: 'products-site',
//     user,
//     products
//   }
//   console.log(products)
//   res.render('pages/products', options)
// })
