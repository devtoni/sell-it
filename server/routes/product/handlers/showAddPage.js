
function showAddPage (req, res) {
  res.render('pages/add', {idSection: 'product'})
}

module.exports = showAddPage
