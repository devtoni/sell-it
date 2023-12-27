const mongoose = require('mongoose')

const collection = 'categories'
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

var CategoriesSchema = Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  products: [
    {
      type: ObjectId,
      ref: 'Product'
    }
  ]
}, { collection })

module.exports = mongoose.model('Category', CategoriesSchema)
