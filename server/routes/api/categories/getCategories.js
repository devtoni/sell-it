const path = require('path')
const Category = require(path.join(__base, '/models/Categories'))

function getCategories (req, res) {
  console.log("getCategories...")
  Category.find()
  .then(categories => {
    const categoriesFormated = categories.reduce((acc, category) => {
      acc[category.title] = category.products.length
      return acc
    }, {})
    res.json(categoriesFormated)
  })
}

module.exports = getCategories
