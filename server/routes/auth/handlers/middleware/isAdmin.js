function isAdmin (req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).end()
  }
  if (!req.user.admin) {
    return res.redirect('/profile')
  }
  return next()
}

module.exports = isAdmin
