
function handleLogout (req, res) {
  req.logout()
  res.redirect('/')
}
module.exports = handleLogout
