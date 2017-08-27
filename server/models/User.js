const mongoose = require('mongoose')

const collection = 'user'

const UserSchema = new mongoose.Schema({ 
  name: { 
    type: String, 
    required: true 
  },
  password: {
    type: String,
    required: true
  },
  products: {
    [
      { type : mongoose.Schema.Types.ObjectId, 
        ref : 'Product', required : true
      }
    ]
  } 
}, { collection })


module.exports = mongoose.model('User', UserSchema)
