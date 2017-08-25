const mongoose = require('mongoose')

const collection = 'categories'

var CategoriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
}, { collection })

module.exports = mongoose.model('Category', CategoriesSchema)
