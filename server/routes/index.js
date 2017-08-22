const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/productos', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'server/views/productos.html'))
})

router.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'server/views/index.html'))
})

router.get('/login', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'server/views/login.html'))
})

router.get('/register', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'server/views/register.html'))
})

module.exports = router
