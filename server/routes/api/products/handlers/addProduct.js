const Product = require('../../../../models/Product')
const User = require('../../../../models/User')

function addProduct (req, res) {
  const { title, description, category, price } = req.body
  const imgUrl = 'img'
  const product = new Product({
    title,
    description,
    price,
    imgUrl,
    category,
    createdBy: '59a725515cd3af1348efc890'
  })

  product.save()
  .then((product) => {
    User
       .findByIdAndUpdate('59a725515cd3af1348efc890', { $push: {products: product._id} })
       .then((user) => res.redirect('/products'))
  })
  .catch((e) => console.log(e))
}

module.exports = addProduct
