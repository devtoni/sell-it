const express = require('express')
const router = express.Router()
const addProduct = require('./handlers/addProduct')
const getProducts = require('./handlers/getProducts')

router.post('/api/add-product', addProduct)
router.get('/api/products', getProducts)

module.exports = router
