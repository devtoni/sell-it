global.__base = __dirname + '/server/'
const app = require('./server/app')
// const http = require('http').Server(app)
// const io = require('socket.io')(http)

const PORT = process.env.PORT || 3001
const db = require('./server/config/db')
const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/sellit'

db.openUri(URL_DB)

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
