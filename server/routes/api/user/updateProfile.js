const path = require('path')
const User = require(path.join(__base, '/models/User'))
const geoCoder = require(path.join(__base, '/services/getLocation'))
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
function updateProfile (req, res) {
  console.log(req.user)
  const { user } = req
  const { username, city, gender, age, imgUrl, productId } = req.body
  const updateOptions = {}
  console.log(req.body)
  if (username) updateOptions['username'] = username
  if (gender) updateOptions['gender'] = gender
  if (age) updateOptions['age'] = age
  if (city) updateOptions['city'] = city
  if (imgUrl) updateOptions['avatarUrl'] = imgUrl
  if (productId) {
    User
       .findByIdAndUpdate(user._id)
       .then(console.log)
       .catch(console.log)
  }

  if (city) {
    geoCoder().geocode(city)
    .then((userLocation) => {
      const latitude = userLocation[0].latitude
      const longitude = userLocation[0].longitude
      return [ latitude, longitude ]
    })
    .then((coords) => {
      updateOptions['coords'] = coords
      User
      .findByIdAndUpdate(user._id, updateOptions)
      .then((userUpdated) => {
        res.send(userUpdated)
      })
    })
     .catch((e) => res.json(e))
  } else {
    User
    .findByIdAndUpdate(user._id, updateOptions)
    .then((userUpdated) => {
      res.send(userUpdated)
    })
    .catch((e) => res.json(e))
  }
}

module.exports = updateProfile
