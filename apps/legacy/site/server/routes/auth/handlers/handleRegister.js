const path = require('path')
const User = require(path.join(__base, '/models/User'))
const geoCoder = require(path.join(__base, '/services/getLocation'))

function postRegister (req, res) {
  const {email, password, lon, lat} = req.body
  const coords = [lon, lat]
  geoCoder().reverse({lat, lon})
  .then((data) => {
    const [{city}] = data
    const admin = true
    const user = new User({ email, coords, city, admin })
    User.register(user, password, err => {
      console.log('paso por register')
      if (err) {
        return res.send({ success: false, msg: 'Email already exists.' })
      }
      res.send({ success: true, msg: 'Successful created new user.' })
    })
  })
}

module.exports = postRegister
