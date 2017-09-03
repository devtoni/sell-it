const path = require('path')
const Category = require(path.join(__base, '/models/Categories'))
const async = require('async')

function getCategories (req, res) {
  async.parallel({
    totalCategories: function (callback) {
      Category.count(callback)
    },
    categoryTitle: function (callback) {
      Category.find({}, {title: 1}, callback)
    }
  }, function (err, results) {
    if (err) throw err
    res.json(results)
  })
}

module.exports = getCategories
