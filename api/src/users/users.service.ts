import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository, EntityManager, Transaction  } from 'typeorm';
import { PostsService } from 'src/posts/posts.service';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class UsersService {
  private postsService: PostsService;

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly moduleRef: ModuleRef,
  ) {}

  onModuleInit() {
    // Inicializa el PostsService en el momento en que el módulo está completamente cargado
    this.postsService = this.moduleRef.get(PostsService, { strict: false });
  }

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
