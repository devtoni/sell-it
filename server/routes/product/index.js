const express = require('express')
const router = express.Router()
const getAddProduct = require('./handlers/getAddProduct')
const getProductDetail = require('./handlers/getProductDetail')

router.get('/add-product', getAddProduct)
router.get('/product-detail', getProductDetail)

// router.post('/product', addProduct)

module.exports = router
