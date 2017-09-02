const path = require('path')
global.__base = path.join(__dirname, '/server')

require('dotenv').load()

const PORT = process.env.PORT
const DB_URI = process.env.DB_URI

const app = require('./server/app')
const db = require('./server/config/db')

const http = require('http').Server(app)
const io = require('./server/config/socket')
io(http, app)

db.openUri(DB_URI)

http.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
