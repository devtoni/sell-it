const path = require('path')
const User = require(path.join(__base, '/models/User'))
const geoCoder = require(path.join(__base, '/services/getLocation'))

function updateProfile (req, res) {
  const { id } = req.user
  const { username, city, gender, age} = req.body
  const updateOptions = {}
  if (username) updateOptions['username'] = username
  if (gender) updateOptions['gender'] = gender
  if (age) updateOptions['age'] = age
  if (city) updateOptions['city'] = city
  if (city) {
    geoCoder().geocode(city)
    .then((userLocation) => {
      const latitude = userLocation[0].latitude
      const longitude = userLocation[0].longitude
      return [latitude, longitude ]
    })
    .then((coords) => {
      updateOptions['coords'] = coords
      User
      .findByIdAndUpdate(id, updateOptions)
      .then((user) => {
        req.flash('success', 'Your profile has been succesfully updated!')
        res.json(user)
      })
    })
    .catch((e) => res.json(e))
  } else {
    User
    .findByIdAndUpdate(id, updateOptions)
    .then((user) => {
      req.flash('success', 'Your profile has been succesfully updated!')
      res.json(user)
    })
    .catch((e) => res.json(e))
  }
}

module.exports = updateProfile
