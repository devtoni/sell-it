
function getHome (req, res) {
  const user = req
  console.log(user)
  res.render('pages/home', {idSection: 'home', user})
}

module.exports = getHome
