function socket (http, app) {
  const io = require('socket.io')(http)
  let messages = []
  io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on('new-message', (data) => {
      messages.push(data)
    })
    socket.emit('chat', messages)
  })
}

module.exports = socket
