const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'server/views/index.html'))
})

router.get('/login', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'server/views/login.html'))
})

router.get('/register', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'server/views/register.html'))
})

router.get('/profile', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'server/views/profile.html'))
})

router.get('/edit-profile', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'server/views/edit.html'))
})

router.get('/add', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'server/views/add.html'))
})

router.get('/products', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'server/views/products.html'))
})

module.exports = router
