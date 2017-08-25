const express = require('express')
const router = express.Router()
const showAddPage = require('./handlers/showAddPage')
const productDetail = require('./handlers/productDetail')
const addProduct = require('./handlers/addProduct')

router.get('/add-product', showAddPage)
router.get('/product-detail', productDetail)
router.post('/add-product', addProduct)
// router.post('/product', addProduct)

module.exports = router
