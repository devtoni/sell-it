
function getHome (req, res) {
  console.log(req.session)
  res.render('pages/home', {idSection: 'home'})
}

module.exports = getHome
