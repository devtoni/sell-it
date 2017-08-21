const express = require('express')
const app = require('./server/app')
const PORT = process.env.PORT || 3001
const path = require('path')

// const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/lend'

/* SERVING FILES */

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
