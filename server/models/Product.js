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
  },
  createdBy: {
    type: ObjectId,
    ref: 'User'
  },
  coords: {
    type: [Number],
    index: '2dsphere'
  }
}, {collection})

module.exports = mongoose.model('Product', ProductSchema)
