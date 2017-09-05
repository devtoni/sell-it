const jwt = require('jsonwebtoken')

function handleAdminLogin (req, res) {
  const SECRET = process.env.SECRET
  const { _id: id, email } = req.user

  const token = jwt.sign({ id, email }, SECRET)
  res.json({success: true, token: token})
}

module.exports = handleAdminLogin
