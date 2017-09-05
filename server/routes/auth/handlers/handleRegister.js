const path = require('path')
const User = require(path.join(__base, '/models/User'))
const geoCoder = require(path.join(__base, '/services/getLocation'))

function postRegister (req, res) {
  const {email, password, lon, lat} = req.body
  const coords = [lon, lat]
  geoCoder().reverse({lat, lon})
  .then((data) => {
    const [{city}] = data
    const user = new User({ email, coords, city })
    User.register(user, password, err => {
      if (err) {
        return res.json({ success: false, msg: 'Email already exists.' })
      }
      res.json({ success: true, msg: 'Successful created new user.' })
    })
  })
}

module.exports = postRegister
