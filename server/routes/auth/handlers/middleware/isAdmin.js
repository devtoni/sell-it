function isAdmin (req, res, next) {
  console.log('paso isadmin')
  if (!req.isAuthenticated()) {
    return res.status(401).end()
  }
  if (!req.user.admin) {
    console.log('not admin')
    return res.status(200).end()
  }
  return next()
}

module.exports = isAdmin
