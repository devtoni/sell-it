
function showRegister (req, res) {
  const section = 'register-site'
  res.render('pages/register', { section })
}

module.exports = showRegister
