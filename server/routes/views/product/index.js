const express = require('express')
const router = express.Router()
const renderAddProductPage = require('./handlers/renderAddProductPage')
const renderProductDetail = require('./handlers/renderProductDetail')

router.get('/add-product', renderAddProductPage)
router.get('/product/:id', renderProductDetail)

module.exports = router
