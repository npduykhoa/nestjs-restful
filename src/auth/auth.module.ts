import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from 'src/auth/passport/local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [AuthService, LocalStrategy],
  imports: [UsersModule, PassportModule],
})
export class AuthModule {}
