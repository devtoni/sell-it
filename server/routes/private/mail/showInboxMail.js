const path = require('path')
const User = require(path.join(__base, '/models/User'))

function showInboxMail (req, res) {
  const { user } = req
  const section = 'mail'
  const populateMessages = User.findById(user._id).populate('receivedMessages')
  populateMessages.then(user => {
    console.log(user)
    const messagesSentBy = user.receivedMessages.map((message) => User.findById(message.author, { avatarUrl: 1, username: 1}))
    Promise.all(messagesSentBy)
    .then((usersSentby) => {
      console.log(usersSentby)
      res.render('pages/inbox', { section, user, usersSentby })
    })
  })
}

module.exports = showInboxMail
