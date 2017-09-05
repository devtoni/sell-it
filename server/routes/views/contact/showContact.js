
function showContact (req, res) {
  const section = 'contact-site'
  res.render('pages/contact', {section})
}
module.exports = showContact
