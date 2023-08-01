import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
// import { UpdatePostInput } from './dto/update-post.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async findOne(id: string): Promise<Post> {
    return this.postRepository.findOne({ where: { id } });
  }

  async create(CreatePostInput: CreatePostInput): Promise<Post> {
    const post = this.postRepository.create(CreatePostInput);
    post.createdAt = new Date();
    post.updatedAt = new Date();
    return this.postRepository.save(post);
  }

  // async update(id: number, updatePostInput: UpdatePostInput): Promise<Post> {
  //   const post = await this.postRepository.findOne({ where: { id } });
  //   Object.assign(post, updatePostInput);
  //   return this.postRepository.save(post);
  // }

  // async remove(id: number): Promise<Post> {
  //   const post = await this.postRepository.findOne({ where: { id } });
  //   return this.postRepository.remove(post);
  // }
}
