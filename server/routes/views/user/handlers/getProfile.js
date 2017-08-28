const Products = require('../../../../models/Product')
const User = require('../../../../models/User')

function getProfile (req, res) {
  Products.find()
  .then((productsList) => {
    User.findOne()
    .then((user) => {
      console.log(user)
      const options = {
        idSection: 'profile',
        productsList,
        user
      }
      res.render('pages/profile', options)
    })
  })
  .catch((e) => console.log(e))
}

module.exports = getProfile
