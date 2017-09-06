
function showMail (req, res) {
  const { user } = req
  const section = 'mail'
  res.render('pages/mail', { section, user })
}

module.exports = showMail
