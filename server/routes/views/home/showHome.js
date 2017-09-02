
function showHome (req, res) {
  const user = req.cookies.user
  const section = 'home'
  res.render('pages/home', {section, user})
}

module.exports = showHome
