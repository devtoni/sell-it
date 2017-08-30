
function getHome (req, res) {
  const {userLog} = req.body
  res.render('pages/home', {idSection: 'home', userLog})
}

module.exports = getHome
