const path = require('path')
const _ = require('lodash')
const User = require(path.join(__base, '/models/User'))

function getUsers (req, res) {
  const users = User.find()

  users.then(users => {
    const usersByGender = _.countBy(users, user => user.gender)
    const usersByStatus = _.countBy(users, user => user.is_Active)
    console.log(usersByStatus)
    const usersByLocation = _.countBy(users, user => user.city)
    const usersByAge = _.countBy(users, user => user.age)
    res.json({ usersByGender, usersByStatus, usersByLocation, usersByAge })
  })
  .catch((error) => res.send(error))
}

module.exports = getUsers

/*

 .aggregate([
    {
      $project: {
        female: {
          $cond: [ { $eq: ['$gender', 'female' ] }, 1, 0]
        },
        male: {
          $cond: [ { $eq: [ '$gender', 'male' ] }, 1, 0]
        }
      }
    },
    {
      $group: {
        _id: '$gender',
        female: { $sum: '$female' },
        male: { $sum: '$male'}
      }
    }
  ])

  */
