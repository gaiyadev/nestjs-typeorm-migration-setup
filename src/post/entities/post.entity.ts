import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'title' })
  title: string;

  @ManyToOne(() => User, (user) => user.posts) // Specify the inverse side relation
  @JoinColumn({ name: 'user_id' }) // Specify the foreign key column
  user: User;
}
