const express = require('express')
const router = express.Router()
const deleteProduct = require('./handlers/deleteProduct')
const updateProduct = require('./handlers/updateProduct')

router.delete('/api/profile/:id', deleteProduct)
router.put('/api/profile/', updateProduct)

module.exports = router
