const Products = require('../../../models/Product')

function getProfile (req, res) {
  Products.find()
  .then((productsList) => {
    const options = {
      idSection: 'profile',
      productsList
    }
    res.render('pages/profile', options)
  })
  .catch((e) => console.log(e))
}

module.exports = getProfile
