const express = require('express')
const router = express.Router()
const showAddPage = require('./handlers/showAddPage')
const productDetail = require('./handlers/productDetail')

router.get('/add-product', showAddPage)
router.get('/product-detail', productDetail)
// router.post('/product', addProduct)

module.exports = router
