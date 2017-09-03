
function showAddProduct (req, res) {
  const { user } = req.cookies
  const section = 'add-product-page'
  console.log(user)
  res.render('pages/add', {section, user})
}

module.exports = showAddProduct
