const mongoose = require('mongoose')
const collection = 'messages'
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

var MessageSchema = new Schema({

  author: {
    type: ObjectId,
    ref: 'User'
  },
  receiver: {
    type: ObjectId,
    ref: 'User'
  },
  subject: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {collection})

module.exports = mongoose.model('Message', MessageSchema)
