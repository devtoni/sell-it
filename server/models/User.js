const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
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
  admin: {
    type: Boolean,
    default: false
  }
}, { collection })

UserSchema.pre('save', function (next) {
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
})

// Compare password input to password saved in database
UserSchema.methods.comparePassword = function (pw, cb) {
  bcrypt.compare(pw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err)
    }
    cb(null, isMatch)
  })
}

module.exports = mongoose.model('User', UserSchema)

  // products:
  // [
  //   { type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Product',
  //     required: true
  //   }
  // ],
