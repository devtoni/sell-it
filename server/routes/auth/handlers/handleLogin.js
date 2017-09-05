
function postLogin (req, res) {
  const { user } = req
  if (user.gender) {
    res.redirect(`/profile/${user._id}`)
  }
  res.redirect('/edit-profile')
}

module.exports = postLogin
