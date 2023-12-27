const path = require('path')
global.__base = path.join(__dirname, '/server')

require('dotenv').load()

const PORT = process.env.PORT
const DB_URI = process.env.DB_URI

const app = require('./server/app')
const db = require('./server/config/db')

db.openUri(DB_URI)

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
