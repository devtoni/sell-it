const path = require('path')
function showAdminSite (req, res) {
  res.sendFile(path.join(__base, '/src/admin/index.html'))
}

module.exports = showAdminSite
