var jwt = require('jsonwebtoken')

function handleAdminLogin (req, res) {
  const SECRET = process.env.SECRET
  const { _id: id, email } = req.user

  const token = jwt.sign({ id, email }, SECRET, {
    expiresIn: 60400
  })
  res.cookie('auth', token)
  res.cookie('user', id)
  res.redirect(`/profile/${id}`)
}

module.exports = handleAdminLogin
