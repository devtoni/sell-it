const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const collection = 'users'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    default: 'Somebody'
  },
  avatarUrl: {
    type: String,
    required: false
  },
  coords: {
    type: [Number],
    index: '2d'
  },
  city: {
    type: String,
    default: 'Somewhere'
  },
  admin: {
    type: Boolean,
    default: false
  },
  gender: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  products: [
    {
      type: ObjectId,
      ref: 'Product'
    }
  ]
}, { collection })

const options = {
  usernameField: 'email'
}

UserSchema.plugin(passportLocalMongoose, (options))

module.exports = mongoose.model('User', UserSchema)
