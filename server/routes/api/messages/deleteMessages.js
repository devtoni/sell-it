const path = require('path')
const Product = require(path.join(__base, '/models/Product'))
const User = require(path.join(__base, '/models/User'))
const Message = require(path.join(__base, 'models/Messages'))
const mongoose = require('mongoose')

function deleteProduct (req, res) {
  const { idMessages } = req.body
  const { user } = req

  const removeMessagesPromise = idMessages.map(id => Message.findByIdAndRemove(id))
  const removeFromUserPromise = idMessages.map(id => User.findByIdAndUpdate(user._id, {$pull: { receivedMessages: id }}))

  Promise.all(removeMessagesPromise, removeFromUserPromise)
         .then((result) => res.send('Todo Ok'))
         .catch((e) => res.send(e))
}

module.exports = deleteProduct
