const path = require('path')
function getAdminPanel (req, res) {
  res.sendFile(path.join(process.cwd(), '/src/admin/index.html'))
}

module.exports = getAdminPanel
