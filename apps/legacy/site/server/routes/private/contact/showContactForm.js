const async = require('async')
const path = require('path')
const User = require(path.join(__base, '/models/User'))

function showContactForm (req, res) {
  const { user } = req
  const { id } = req.params

  async.parallel({
    productOwner: (callback) => {
      User.findById(id, callback)
    }
  }, (err, result) => {
    const section = 'contact'
    res.render('pages/contact', { user, otherUser: result.productOwner, section })
  })
}

module.exports = showContactForm
