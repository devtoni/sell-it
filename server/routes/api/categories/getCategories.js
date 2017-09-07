const path = require('path')
const Category = require(path.join(__base, '/models/Categories'))

function getCategories (req, res) {
  const categories = Category.find()

  categories.then(categoryList => {
    const categoriesFormated = categoryList.reduce((acc, category) => {
      acc[category.title] = category.products.length
      return acc
    }, {})
    res.json(categoriesFormated)
  })
}

module.exports = getCategories
