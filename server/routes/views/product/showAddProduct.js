function showAddProduct (req, res) {
  const { user } = req
  const section = 'add-product-page'
  res.render('pages/add', { section, user })
}

module.exports = showAddProduct
