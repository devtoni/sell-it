
function handleLogout (req, res) {
  req.session = null
}
module.exports = handleLogout
