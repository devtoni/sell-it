function isAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    console.log('es autenticado')
    return next()
  }
  res.redirect('/login')
}
module.exports = isAuthenticated
