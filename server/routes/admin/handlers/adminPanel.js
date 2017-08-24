const path = require('path')

function adminPanel (req, res) {
  res.sendFile(path.join(process.cwd(), '/src/admin/index.html'))
}

module.exports = adminPanel
