function showAdminLogin (req, res) {
  const section = 'login-site'
  res.render('pages/adminLogin', { section})
}
module.exports = showAdminLogin
