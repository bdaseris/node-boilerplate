import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Users } from './Users'

@Index('posts_pkey', ['id'], { unique: true })
@Entity('posts', { schema: 'public' })
export class Posts {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number

  @Column('text', { name: 'title' })
  title: string

  @Column('text', { name: 'content', nullable: true })
  content: string | null

  @Column('bit', { name: 'published', default: () => "B'0'" })
  published: number

  @ManyToOne(() => Users, (users) => users.posts, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'author_id', referencedColumnName: 'id' }])
  author: Users

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date
}
