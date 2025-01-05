import { Controller, Delete, Get, Post, Body, Patch, Param, Request, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { JwtTokenDto } from 'src/auth/dto/jwt-token.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get('me')
  getMe(@Request() req: JwtTokenDto) { 
    console.log(req.user);
    return { message: "success"};
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOneByID(@Param('id') id: string) {
    return this.userService.findOneById(parseInt(id));
  }

  @Get('email/:email')
  findOneByEmail(@Param('email') email: string) {
    return this.userService.findOneByEmail(email);
  }

  @Get('name/:name')
  getSuggestionByName(@Param('name') name: string) {
    return this.userService.getSuggestionByName(name);
  }

  @UseGuards()
  @Post('login')
  async login(@Body() loginDto: LoginUserDto) {
    return this.authService.validateUser(loginDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(parseInt(id), updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
}
