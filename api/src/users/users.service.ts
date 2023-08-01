import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @Inject(forwardRef(() => PostsService))
    private readonly postsService: PostsService, // Usa forwardRef para resolver la dependencia circular
  ) {}

  async create(CreateUserInput: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(CreateUserInput);
    user.createdAt = new Date();
    user.updatedAt = new Date();
    return this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async findUserPosts(authorId: string): Promise<any[]> {
    // Usa el PostsService para encontrar los posts del usuario
    return this.postsService.findAllByAuthorId(authorId);
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
