function getEditPage (req, res) {
  const {user} = req
  res.render('pages/edit-profile', {idSection: 'profile', user})
}

module.exports = getEditPage
