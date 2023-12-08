import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Posts } from './Posts'

@Index('users_email_key', ['email'], { unique: true })
@Index('users_pkey', ['id'], { unique: true })
@Entity('users', { schema: 'public' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number

  @Column('text', { name: 'email' })
  email: string

  @Column('text', { name: 'login' })
  login: string

  @OneToMany(() => Posts, (posts) => posts.author)
  posts: Posts[]

  @Column('jsonb', { name: 'js_access', nullable: true })
  jsAccess: object | null

  @Column('bit', { name: 'is_active', default: () => "B'1'" })
  isActive: number

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date
}
