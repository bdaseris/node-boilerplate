import { User } from '@/domain/entities/user'
import { IRepository, IUseCase } from '@/domain/interfaces'

export class CreateUseruseCase implements IUseCase {
  constructor(private readonly userRepository: IRepository<User>) {}

  execute(data: any): Promise<any> {
    throw new Error('Method not implemented.')
  }
}
