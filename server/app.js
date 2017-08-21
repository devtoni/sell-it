const express = require('express')
const app = express()
const path = require('path')
const router = require('./routes/')

app.use(router)
app.use(express.static(path.join(process.cwd(), 'client')))

module.exports = app
