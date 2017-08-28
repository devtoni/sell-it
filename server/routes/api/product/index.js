const express = require('express')
const router = express.Router()
const deleteProduct = require('./handlers/deleteProduct')
const editProduct = require('./handlers/editProduct')

router.delete('/api/profile/:id', deleteProduct)
router.put('/api/profile/', editProduct)

module.exports = router
