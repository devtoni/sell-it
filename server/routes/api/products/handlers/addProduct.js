const Product = require('../../../../models/Product')

function addProduct (req, res) {
  const { title, description, category, price} = req.body
  let imgUrl = 'img'
  console.log(typeof category)
  const product = new Product({
    title,
    description,
    price,
    imgUrl,
    category: (typeof req.body.category === 'undefined') ? [] : req.body.category.split(',')
  })
  product.save()
  .then(() => {
    console.log('guardado')
  })
  .catch((e) => console.log(e))
}

module.exports = addProduct
