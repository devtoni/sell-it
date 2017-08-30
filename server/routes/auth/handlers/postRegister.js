const User = require('../../../models/User')

function postRegister (req, res) {
  const { email, password } = req.body
  const user = new User({ email, password })
  user.save()
  .then((data) => {
    res.redirect('/login')
  })
  .catch((e) => res.send(e))
}

module.exports = postRegister
