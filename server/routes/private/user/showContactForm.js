function showContactForm (req, res) {
  const { user } = req
  const section = 'contact'
  res.render('pages/contact', { user, section })
}

module.exports = showContactForm
