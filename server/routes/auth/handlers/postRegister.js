const User = require('../../../models/User')

function postRegister (req, res) {
  const { lat, lon, email, password } = req.body
  const coords = [lat, lon]
  const user = new User({ email, password, coords })
  user.save()
  .then((data) => {
    res.send(`user ${email} created succesfully!`)
  })
  .catch((e) => res.send())
}

module.exports = postRegister
