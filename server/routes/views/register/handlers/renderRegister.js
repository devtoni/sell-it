
function renderRegister (req, res) {
  res.render('pages/register', {idFooter: 'logReg', section: 'add-detail-page'})
}

module.exports = renderRegister
