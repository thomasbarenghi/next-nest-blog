import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from '../posts/posts.module';
import { PostsService } from '../posts/posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => PostsModule) ],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
