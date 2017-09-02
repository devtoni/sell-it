const NodeGeocoder = require('node-geocoder')
const API = process.env.API
var options = {
  provider: 'google',

 // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: API,
  formatter: null         // 'gpx', 'string', ...
}

function getLocation () {
  return NodeGeocoder(options)
}

module.exports = getLocation
