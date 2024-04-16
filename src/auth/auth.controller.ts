import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { Public } from 'src/auth/decorator/customize';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('login')
  handleLogin(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
