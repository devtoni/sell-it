function showContactForm (req, res) {
  res.render('pages/contact', {idSection: 'profile'})
}

module.exports = showContactForm
