var jwt = require('jsonwebtoken')

function postLogin (req, res) {
  const SECRET = process.env.SECRET
  const { _id: id, email } = req.user

  const token = jwt.sign({ id, email }, SECRET, {
    expiresIn: 60400
  })
  res.cookie('auth', token)
  res.redirect(`/profile/${id}`)
}

module.exports = postLogin
