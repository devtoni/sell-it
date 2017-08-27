
function getAddProduct (req, res) {
  res.render('pages/add', {idFooter: 'logReg', section: 'add-detail-page'})
}

module.exports = getAddProduct
