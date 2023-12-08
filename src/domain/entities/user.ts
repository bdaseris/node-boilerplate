import { Posts } from '@/infra/persistences/typeorm/models/Posts'

export class User {
  constructor(
    public id: string,
    public email: string,
    public login: string,
    public posts: Posts[],
    public jsAccess: object | null,
    public isActive: number,
    public createdAt: Date
  ) {}
}
