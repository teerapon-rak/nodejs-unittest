const axios = require('axios')
const utils = require('../utils/utils')

const users = [
  {
    username: 'user01',
    email: 'user01@mail.com',
    firstName: 'user01first',
    lastName: 'user01last'
  },{
    username: 'user02',
    email: 'user02@mail.com',
    firstName: 'user02first',
    lastName: 'user02last'
  },
]

const addUser = async (user) => {
  //fake repository

  await utils.delay(3000)
}

const getUser = async (username) => {
  //fake repository

  await utils.delay(3000)

  return users.filter(u => u.username === username)[0]
}

const getAllUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')

  return response.data
}

module.exports = {
  addUser,
  getUser,
  getAllUsers
}