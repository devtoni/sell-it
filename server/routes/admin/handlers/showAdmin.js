const path = require('path')

function showAdmin (req, res) {
  res.render('pages/admin-login', {idSection: ''})
}

module.exports = showAdmin
