const mongoose = require('mongoose')
const collection = 'products'
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

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
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  is_Active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: ObjectId,
    ref: 'User'
  },
  coords: {
    type: [Number],
    index: '2d'
  }
}, {collection})

module.exports = mongoose.model('Product', ProductSchema)
