import { Module } from '@nestjs/common';
import { Post } from './entities/post.entity';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostsResolver, PostsService],
})
export class PostsModule {}
