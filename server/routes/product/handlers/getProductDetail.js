
function getProductDetail (req, res) {
  res.render('pages/detail', {section: 'product-detail-page'})
}

module.exports = getProductDetail
