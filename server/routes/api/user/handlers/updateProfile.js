const User = require('../../../../models/User')
const NodeGeocoder = require('node-geocoder')
var options = {
  provider: 'google',

 // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyDak_UIsuVQLkrdjC-XHMNjfJmUz91VD8g',
  formatter: null         // 'gpx', 'string', ...
}

function updateProfile (req, res) {
  const { id } = req.params
  console.log(`id from params update ${id}`)
  const { username, city, gender, age} = req.body
  const updateOptions = {}

  if (username) updateOptions['username'] = username
  if (gender) updateOptions['gender'] = gender
  if (age) updateOptions['age'] = age
  if (city) updateOptions['city'] = city
  if (city) {
    var geocoder = NodeGeocoder(options)
    geocoder.geocode(city)
    .then((userLocation) => {
      const latitude = userLocation[0].latitude
      const longitude = userLocation[0].longitude
      return [latitude, longitude ]
    })
    .then((coords) => {
      updateOptions['coords'] = coords
      User
      .findByIdAndUpdate(id, updateOptions)
      .then((user) => res.json(user))
    })
    .catch((e) => console.log(e))
  } else {
    User
    .findByIdAndUpdate(id, updateOptions)
    .then((user) => res.json(user))
    .catch((e) => console.log(e))
  }
}

module.exports = updateProfile
