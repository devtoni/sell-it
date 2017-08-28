const geoIp = require('geoip-lite')

function getRegister (req, res) {
  console.log(req.headers['x-forwarded-for'])
  res.render('pages/register', { footerPosition: 'absolute'})
}

module.exports = getRegister
