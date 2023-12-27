function isAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    console.log('es autenticado')
    return next()
  }
  console.log('redirecting to login...')
  res.redirect('/login')
}
module.exports = isAuthenticated
