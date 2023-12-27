const path = require('path')
const User = require(path.join(__base, '/models/User'))

function showHome (req, res) {
  const section = 'home'
  if (req.user) {
    const { user } = req
    res.render('pages/home', { section, user })
  } else {
    res.render('pages/home', { section })
  }
}

module.exports = showHome
