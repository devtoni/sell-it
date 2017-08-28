function getEditPage (req, res) {
  res.render('pages/edit-profile', {idSection: 'profile'})
}

module.exports = getEditPage
