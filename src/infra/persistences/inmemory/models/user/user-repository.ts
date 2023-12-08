import { User } from '@/domain/entities/user'
import { IRepository } from '@/domain/interfaces'

export class UserRepositoryInMemory implements IRepository<User> {
  constructor(private readonly users: User[] = []) {}

  async save(user: User): Promise<void> {
    this.users.push(user)
  }

  async find(id: string): Promise<User[] | User | null> {
    const user = this.users.find((user) => user.id === id)

    if (!user) return null

    return user
  }

  getAll(): User[] {
    return this.users
  }
}
