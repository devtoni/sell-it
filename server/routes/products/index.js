const express = require('express')
const router = express.Router()
const getProducts = require('./handlers/showProductsPage')

router.get('/products', getProducts)

module.exports = router
