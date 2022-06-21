const userRepository = require('../repositories/user-repository')

const getTopUsers = async (top) => {
  const allUsers = await userRepository.getAllUsers()

  return allUsers.slice(0, top)
}

const addUser = async (user) => {
  //Check if user exists
  const existingUser = await userRepository.getUser(user.username)
  
  if(existingUser) {
    return {
      status: 406,
      message: 'The username already exists'
    }
  }

  //add user if user doesn't exists
  await userRepository.addUser(user)
}

module.exports = {
  getTopUsers,
  addUser
}