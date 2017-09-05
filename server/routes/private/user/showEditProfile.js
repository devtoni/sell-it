function showEditProfile (req, res) {
  const { user } = req
  const section = 'edit-profile'
  res.render('pages/edit-profile', { section, user })
}

module.exports = showEditProfile
