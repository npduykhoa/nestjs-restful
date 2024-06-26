import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { RegisterUserDto, UserLoginDto } from 'src/users/dto/create-user.dto';
import { Request, Response } from 'express';
import { IUser } from 'src/users/users.interface';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Authentications')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @ApiBody({ type: UserLoginDto })
  @Post('login')
  handleLogin(@Req() req, @Res({ passthrough: true }) response: Response) {
    return this.authService.login(req.user, response);
  }

  @Get('account')
  @ResponseMessage('Get account information')
  getAccount(@User() user: IUser) {
    return { user };
  }

  @Public()
  @Get('refresh')
  @ResponseMessage('Get account by refresh token')
  handleRefreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const refresh_token = req.cookies['refresh_token'];
    return this.authService.processNewToken(refresh_token, response);
  }

  @Public()
  @ResponseMessage('Register a new user successfully')
  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  @ResponseMessage('Logout successfully')
  @Post('logout')
  async handleLogout(
    @Res({ passthrough: true }) response: Response,
    @User() user: IUser,
  ) {
    return this.authService.logout(response, user);
  }
}
