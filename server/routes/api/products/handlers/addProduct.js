const Product = require('../../../../models/Product')
const User = require('../../../../models/User')

function addProduct (req, res) {
  const {id} = req.user
  const { title, description, category, price } = req.body
  const imgUrl = 'img'
  const product = new Product({
    title,
    description,
    price,
    imgUrl,
    category,
    createdBy: id
  })

  product.save()
  .then((product) => {
    User
       .findByIdAndUpdate(id, { $push: {products: product._id} })
       .then((user) => res.redirect('/products'))
  })
  .catch((e) => console.log(e))
}

module.exports = addProduct

// user 1: 59a72f5ebc2bb42df4448e16
