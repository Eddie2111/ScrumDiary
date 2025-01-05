import argon2 from "argon2";

import { Body, Injectable, UnauthorizedException } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { ValidateUserDto } from "./dto/validate-user.dto";
import { Users } from "src/common/entity/users.entity";

@Injectable()
export class UserService{
  constructor(
    private readonly userRepository: UserRepository
  ) {}
  async create(@Body() createUserDto: CreateUserDto) {
    const passwordHash = await argon2.hash(createUserDto.password);
    createUserDto.password = passwordHash;
    return this.userRepository.createUser(createUserDto);
  }

  findAll() {
    return `This action returns all user`;
  }

  async validate(validUser: ValidateUserDto): Promise<any> {
    const user = await this.validateUser(validUser);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async validateUser(validateUser: ValidateUserDto){
    const userData = await this.userRepository.getUserByEmail(validateUser.email);
    if(userData){
      const valid = await argon2.verify(userData.password, validateUser.password);
      if (valid) { return userData }
      else throw new UnauthorizedException();
    } else{
      throw new UnauthorizedException();
    }
  }
  async findOneById(id: number): Promise<Partial<Users>> {
    const {email, name, password} = await this.userRepository.getUserById(id);
    return { id, email, name, password };
  }

  findOneByEmail(email: string) {
    return this.userRepository.getUserByEmail(email);
  }

  update(id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userRepository.updateUser(id, updateUserDto);
  }

  getSuggestionByName(name: string): Promise<Users[]> {
    const users = this.userRepository.getUsersByName(name);
    return users;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
