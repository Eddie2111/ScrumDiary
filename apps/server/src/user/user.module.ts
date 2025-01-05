import { AuthService } from 'src/auth/auth.service';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/common/entity/users.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature([Users])
  ],
  controllers: [UserController],
  providers: [AuthService, JwtService, UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
