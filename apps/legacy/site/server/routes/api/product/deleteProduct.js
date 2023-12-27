const path = require('path')
const Product = require(path.join(__base, '/models/Product'))
const User = require(path.join(__base, '/models/User'))
const Category = require(path.join(__base, 'models/Categories'))
const mongoose = require('mongoose')

function deleteProduct (req, res) {
  const { id } = req.params
  const { user } = req

  const removeFromUser = User.findByIdAndUpdate(user._id, {$pull: { products: id }})
  const removeFromCategory = Category.findOneAndRemove({products: { $in: [mongoose.Types.ObjectId(id)] }})
  const removeFromProduct = Product.findByIdAndRemove(id)

  Promise.all([removeFromUser, removeFromCategory, removeFromProduct])
         .then((result) => res.send('Todo Ok'))
         .catch((e) => res.send(e))
}

module.exports = deleteProduct
