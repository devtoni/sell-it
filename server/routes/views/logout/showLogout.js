
function showLogout (req, res) {
  cookie = req.cookies
  for (var prop in cookie) {
    if (!cookie.hasOwnProperty(prop)) {
      continue
    }
    res.cookie(prop, '', {expires: new Date(0)})
  }
  res.render('pages/logout')
}
module.exports = showLogout
