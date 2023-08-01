import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn("uuid")
  @Field()
  id: string;
  @Column()
  @Field()
  title: string;
  @Column()
  @Field()
  shortDescription: string;
  @Column()
  @Field()
  description: string;
  @Column()
  @Field(() => Int)
  price: number;
  @Column()
  @Field()
  image: string;
  @Column()
  @Field()
  createdAt: Date;
  @Column()
  @Field()
  updatedAt: Date;
}
