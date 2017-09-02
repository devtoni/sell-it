
function showLogin (req, res) {
  const section = 'login-site'
  res.render('pages/login', {section})
}
module.exports = showLogin
