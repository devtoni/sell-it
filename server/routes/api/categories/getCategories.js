const path = require('path')
const Category = require(path.join(__base, '/models/Categories'))
const async = require('async')

function getCategories (req, res) {
  Category.find()
  .then(categories => res.json(categories))
}

module.exports = getCategories
