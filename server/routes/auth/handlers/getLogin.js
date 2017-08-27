
function getLogin (req, res) {
  res.render('pages/login', {idFooter: 'logReg'})
}
module.exports = getLogin
