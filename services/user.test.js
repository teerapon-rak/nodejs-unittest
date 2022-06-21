const userService = require('./user')

describe('Test userService', () => {
  describe('addUser', () => {
    test('should be passed when user doesn\'t exists', async () => {
      const mockNotExistingUser = {
        username: 'user99',
        email: 'user99@mail.com',
        firstName: 'user99first',
        lastName: 'user99last'
      }

      const userRepository = require('../repositories/user-repository')
      const mockGetUser = jest.fn()
      const mockAddUser = jest.fn()
  
      mockGetUser.mockReturnValue(undefined)
      userRepository.getUser = mockGetUser
      userRepository.addUser = mockAddUser
  
      await userService.addUser(mockNotExistingUser)
      expect(mockGetUser.mock.calls.length).toBe(1)
      expect(mockAddUser.mock.calls.length).toBe(1)
    })

    test('should be error when user already exists', async () => {
      const mockExistingUser = {
        username: 'user01',
        email: 'user01@mail.com',
        firstName: 'user01first',
        lastName: 'user01last'
      }

      const userRepository = require('../repositories/user-repository')
      const mockGetUser = jest.fn()
      const mockAddUser = jest.fn()

      userRepository.getUser = mockGetUser
      userRepository.addUser = mockAddUser

      mockGetUser.mockReturnValue(mockExistingUser)

      await userService.addUser(mockExistingUser)
      expect(mockGetUser.mock.calls.length).toBe(1)
      expect(mockAddUser.mock.calls.length).toBe(0)
    })
  })

  describe('getUser', () => {
    test('should be received 5 users when specify top 5', async () => {
      const userRepository = require('../repositories/user-repository')
      const mockGetAllUsers = jest.fn()

      mockGetAllUsers.mockReturnValue([
        {
          username: 'user01',
          email: 'user01@mail.com',
          firstName: 'user01first',
          lastName: 'user01last'
        },{
          username: 'user01',
          email: 'user01@mail.com',
          firstName: 'user01first',
          lastName: 'user01last'
        },{
          username: 'user01',
          email: 'user01@mail.com',
          firstName: 'user01first',
          lastName: 'user01last'
        },{
          username: 'user01',
          email: 'user01@mail.com',
          firstName: 'user01first',
          lastName: 'user01last'
        },{
          username: 'user01',
          email: 'user01@mail.com',
          firstName: 'user01first',
          lastName: 'user01last'
        },{
          username: 'user01',
          email: 'user01@mail.com',
          firstName: 'user01first',
          lastName: 'user01last'
        },{
          username: 'user01',
          email: 'user01@mail.com',
          firstName: 'user01first',
          lastName: 'user01last'
        },{
          username: 'user01',
          email: 'user01@mail.com',
          firstName: 'user01first',
          lastName: 'user01last'
        },{
          username: 'user01',
          email: 'user01@mail.com',
          firstName: 'user01first',
          lastName: 'user01last'
        },{
          username: 'user01',
          email: 'user01@mail.com',
          firstName: 'user01first',
          lastName: 'user01last'
        }
      ])

      userRepository.getAllUsers = mockGetAllUsers

      const users = await userService.getTopUsers(5)
      expect(users.length).toBe(5)
    })
  })
  
})