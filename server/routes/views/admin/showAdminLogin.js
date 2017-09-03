const path = require('path')

function showAdminLogin (req, res) {
  res.sendFile(path.join(__base, '../src/admin/index.html'))
}
module.exports = showAdminLogin
