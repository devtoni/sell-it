const path = require('path')
const Product = require(path.join(__base, '/models/Product'))
const User = require(path.join(__base, '/models/User'))

function addProduct (req, res) {
  const {id} = req.user
  User.findById(id)
  .then((user) => {
    const { title, description, category, price } = req.body
    const imgUrl = 'img'
    const product = new Product({
      title,
      description,
      price,
      imgUrl,
      category,
      createdBy: id,
      coords: user.coords
    })
    return product
  })
  .then((product) => {
    product.save()
    .then((product) => {
      User
      .findByIdAndUpdate(id, { $push: {products: product._id} })
      .then((user) => res.redirect('/products'))
    })
  })
  .catch((e) => console.log(e))
}

module.exports = addProduct
