import { FindManyOptions, Repository } from 'typeorm'
import { entityManager } from '@/infra/persistences/typeorm'

import { Users } from '@/infra/persistences/typeorm/models/Users'
import { User } from '@/domain/entities/user'

export abstract class UserService {
  static _userRepository: Repository<Users> = entityManager.getRepository(Users)

  static async find(options?: FindManyOptions<Users>): Promise<Users[] | null> {
    return UserService._userRepository.find(options)
  }

  static async save(data: any): Promise<void | User | null> {
    return UserService._userRepository.save(data)
  }

  public toString(): string {
    return 'UserService'
  }
}
