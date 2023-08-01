import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;
  @Column()
  @Field()
  firstName: string;
  @Column()
  @Field()
  lastName: string;
  @Column()
  @Field()
  email: string;
  @Column()
  @Field()
  password: string;
  @Column()
  @Field()
  createdAt: Date;
  @Column()
  @Field()
  updatedAt: Date;
  @OneToMany(() => Post, (post) => post.user)
  @Field(() => [Post])
  posts: Post[];
}
