var jwt = require('jsonwebtoken')

function postLogin (req, res) {
  const SECRET = process.env.SECRET
  console.log(req.user)
  const { _id: id, email } = req.user

  const token = jwt.sign({ id, email }, SECRET)
  req.session.user = user
  res.redirect(`/profile/${id}`)
}

module.exports = postLogin
