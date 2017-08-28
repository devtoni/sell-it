const User = require('../../../models/User')

function postRegister (req, res) {
  const { lat, lon, email, password } = req.body
  const coords = [lat, lon]
  console.log(email)
  const user = new User({ email, password, coords})
  user.save()
  .then((data) => {
    res.render('pages/register', { footerPosition: 'absolute'})
  })
  .catch((e) => res.send())
}

module.exports = postRegister
