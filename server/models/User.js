const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const uniqueValidator = require('mongoose-unique-validator')
const ObjectId = mongoose.Schema.Types.ObjectId

const collection = 'user'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
    uniqueCaseInsensitive: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
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

UserSchema.pre('save', encryptPassword)

function encryptPassword (next) {
  const user = this
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err)
      }
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err)
        }
        user.password = hash
        next()
      })
    })
  } else {
    return next()
  }
}

// Compare password input to password saved in database
UserSchema.methods.comparePassword = function (pw, cb) {
  bcrypt.compare(pw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err)
    }
    cb(null, isMatch)
  })
}

UserSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', UserSchema)
