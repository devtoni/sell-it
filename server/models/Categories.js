const mongoose = require('mongoose')

const collection = 'categories'
const Schema = mongoose.Schema

var CategoriesSchema = Schema({
  name: {
    formType: String,
    required: true,
    min: 3,
    max: 100
  }
})

module.exports = mongoose.model('Category', CategoriesSchema)
