const express = require('express')
const router = express.Router()
const addProduct = require('./handlers/addProduct')

router.post('/api/add-product', addProduct)

module.exports = router
