import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Logger,
  Session,
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  logger: Logger;
  constructor(private readonly usersService: UsersService) {
    this.logger = new Logger('LocalStrategy');
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req, @Session() session): Promise<any> {
    const user = req.user;
    session.userId = user.userId;
    session.email = user.email;

    // Obtiene el ID de la sesión actual
    const sessionId = req.sessionID;

    return { User: user, SessionID: sessionId, msg: 'User logged in' };
  }
}
