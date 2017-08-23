const express = require('express')
const router = express.Router()
const showProducts = require('./handlers/showProducts')

router.get('/products', showProducts)

module.exports = router
