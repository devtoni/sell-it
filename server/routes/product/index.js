const express = require('express')
const router = express.Router()
const showAddPage = require('./handlers/showAddPage')

router.get('/add-product', showAddPage)
// router.post('/product', addProduct)

module.exports = router
