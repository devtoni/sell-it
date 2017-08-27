
function getLogout (req, res) {
  res.render('pages/logout', {idFooter: 'logReg'})
}

module.exports = getLogout
