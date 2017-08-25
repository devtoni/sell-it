const mongoose = require('mongoose')

const collection = 'products'

var ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // imgUrl: {
  //   type: String,
  //   require: true
  // },
  img: {
    data: Buffer, 
    contentType: String
  },
  is_Active: {
    type: Boolean,
    default: false
  },
  categories {
    [
      { type : mongoose.Schema.Types.ObjectId, 
        ref : 'Category', required : true
      }
    ]
  },
  createdAt: {
    type: Number,
    default: Date.now()
  }
}, { collection })

module.exports = mongoose.model('Product', ProductSchema)
