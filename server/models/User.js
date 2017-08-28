const mongoose = require('mongoose')

const collection = 'user'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  coords: {
    type: [Number],
    index: '2d'
  },
  // products:
  // [
  //   { type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Product',
  //     required: true
  //   }
  // ],
  admin: {
    type: Boolean,
    default: false
  }
}, { collection })

module.exports = mongoose.model('User', UserSchema)
