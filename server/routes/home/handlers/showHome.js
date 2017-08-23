
function showHome (req, res) {
  res.render('pages/home', {idSection: 'home'})
}

module.exports = showHome
