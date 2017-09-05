const path = require('path')
const User = require(path.join(__base, '/models/User'))
const geoCoder = require(path.join(__base, '/services/getLocation'))

function updateProfile (req, res) {
  console.log(req.user)
  const { user } = req
  const { username, city, gender, age, imgUrl } = req.body
  const updateOptions = {}

  if (username) updateOptions['username'] = username
  if (gender) updateOptions['gender'] = gender
  if (age) updateOptions['age'] = age
  if (city) updateOptions['city'] = city
  if (imgUrl) updateOptions['avatarUrl'] = imgUrl

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
      .findByIdAndUpdate(user._id, updateOptions)
      .then((userUpdated) => {
        res.json(userUpdated)
      })
    })
    .catch((e) => res.json(e))
  } else {
    User
    .findByIdAndUpdate(user._id, updateOptions)
    .then((userUpdated) => {
      res.json(userUpdated)
    })
    .catch((e) => res.json(e))
  }
}

module.exports = updateProfile
