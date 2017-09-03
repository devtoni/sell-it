const path = require('path')
const Product = require(path.join(__base, '/models/Product'))
const User = require(path.join(__base, '/models/User'))
const Category = require(path.join(__base, '/models/Categories'))
const fileUrl = require('file-url')

function addProduct (req, res) {
  const { title, description, category, price, imgUrl} = req.body
  const {id} = req.user

  Category
  .findOneAndUpdate({title: category}, { $push: {products: id} }, {upsert: true})
  .then((ok) => console.log(ok))

  User.findById(id)
  .then((user) => {
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
