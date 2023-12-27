const path = require('path')
const Product = require(path.join(__base, '/models/Product'))
const User = require(path.join(__base, '/models/User'))
const Category = require(path.join(__base, '/models/Categories'))

function addProduct (req, res) {
  const { title, description, category, price, imgUrl } = req.body
  const {_id: id} = req.user

  User.findById(id)
  .then((user) => {
    const product = new Product({
      createdAt: new Date('2017-09-05').getTime(),
      title,
      description,
      price,
      imgUrl,
      category,
      createdBy: id,
      loc: { type: 'Point', coordinates: user.coords }
    })
    return product
  })
  .then((product) => {
    product.save()
    Category
    .findOneAndUpdate({title: category}, { $push: {products: product._id} }, {upsert: true})
    .then((category) => {
      User
      .findByIdAndUpdate(id, { $push: {products: product._id} })
      .then((user) => {
        res.redirect(`/profile/${user._id}`)
      })
    })
  })
  .catch((e) => console.log(e))
}

module.exports = addProduct
