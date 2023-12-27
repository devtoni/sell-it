const NodeGeocoder = require('node-geocoder')

var options = {
  provider: 'teleport',

 // Optional depending on the providers
  httpAdapter: 'https', // Default
  formatter: null         // 'gpx', 'string', ...
}

function getLocation () {
  return NodeGeocoder(options)
}

module.exports = getLocation
