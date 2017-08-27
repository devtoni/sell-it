const mongoose = require('mongoose')

const collection = 'products'
const Schema = mongoose.Schema

var ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    require: true,
    default: 0
  },
  imgUrl: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  is_Active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Number,
    default: Date.now()
  }
}, {collection})

module.exports = mongoose.model('Product', ProductSchema)
