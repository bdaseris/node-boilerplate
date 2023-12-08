import { User } from '@/domain/entities/user'
import { UserRepositoryInMemory } from './user-repository'

describe('UserRepositoryInMemory', () => {
  it('should save a user when called with valid user data', async () => {
    const userRepository = new UserRepositoryInMemory()
    const user = new User(
      '1',
      'test@example.com',
      'testuser',
      [],
      null,
      1,
      new Date()
    )

    await userRepository.save(user)
    const users = userRepository.getAll()

    expect(users.length).toBe(1)
    expect(users[0]).toBe(user)
  })

  
  it('should find a user by their id when called with a valid id', async () => {
    const userRepository = new UserRepositoryInMemory()
    const user = new User(
      '1',
      'test@example.com',
      'testuser',
      [],
      null,
      1,
      new Date()
    )

    await userRepository.save(user)
    const foundUser = await userRepository.find('1')

    expect(foundUser).toBe(user)
  })

  // Should be able to handle finding a non-existent user
  it('should return null when called with an id that does not exist in the repository', async () => {
    const userRepository = new UserRepositoryInMemory()
    const foundUser = await userRepository.find('1')

    expect(foundUser).toBeNull()
  })

  // Should be able to handle finding a user with an invalid id
  it('should return null when called with an invalid id', async () => {
    const userRepository = new UserRepositoryInMemory()
    const user = new User(
      '1',
      'test@example.com',
      'testuser',
      [],
      null,
      1,
      new Date()
    )

    await userRepository.save(user)

    const foundUser = await userRepository.find('2')

    expect(foundUser).toBeNull()
  })

  // Should be able to handle finding a user when the repository is empty
  it('should return null when called with an id and the repository is empty', async () => {
    const userRepository = new UserRepositoryInMemory()

    const foundUser = await userRepository.find('1')

    expect(foundUser).toBeNull()
  })
})
