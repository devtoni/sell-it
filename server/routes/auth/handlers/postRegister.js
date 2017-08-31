const User = require('../../../models/User')

function postRegister (req, res) {
  const { email, password } = req.body
  const user = new User({ email })

  User.register(user, password, err => {
    if (err) {
      return res.json({ success: false, msg: 'Email already exists.' })
    }
    res.json({ success: true, msg: 'Successful created new user.' })
  })
}

module.exports = postRegister
