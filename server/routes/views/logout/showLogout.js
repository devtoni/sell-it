
function showLogout (req, res) {
  req.session = null
  res.redirect('/')
}
module.exports = showLogout
