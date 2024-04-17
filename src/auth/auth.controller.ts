import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { RegisterUserDto } from 'src/users/dto/create-user.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('login')
  handleLogin(@Req() req, @Res({ passthrough: true }) response: Response) {
    return this.authService.login(req.user, response);
  }

  @Public()
  @ResponseMessage('Register a new user successfully')
  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }
}
