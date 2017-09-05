
function postLogin (req, res) {
  req.session.user = req.user
  res.redirect('/profile')
}

module.exports = postLogin
