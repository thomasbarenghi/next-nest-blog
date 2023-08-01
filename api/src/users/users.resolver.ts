import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { encryptPassword } from '../utils/bcrypt.utils';
import { Post } from '../posts/entities/post.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    createUserInput.password = await encryptPassword(createUserInput.password);
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.usersService.findOne(id);
  }

  // @ResolveField('posts', (returns) => [Post])
  // async getPosts(@Parent() author: User) {
  //   const { id } = author;
  //   return this.usersService.findUserPosts(id);
  // }

  // @Mutation(() => User)
  // updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.usersService.update(updateUserInput.id, updateUserInput);
  // }

  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: string) {
  //   return this.usersService.remove(id);
  // }
}
