const userService = require('../services/user')
const utils = require('../utils/utils')

const getTopUsers = async (req, res) => {
  const users = await userService.getTopUsers(req.params.top)

  res.status(200).json(users)
}

const addUser = async (req, res) => {
  const err = await userService.addUser(req.body)

  if(err) {
    res.status(err.status).send(err.message)
    return
  }

  res.status(201).send('User added successfully')
}

module.exports = {
  getTopUsers,
  addUser
}