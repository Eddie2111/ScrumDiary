import argon2 from "argon2";
import { Injectable } from '@nestjs/common';
import { Users } from "src/common/entity/users.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { EntityManager } from "@mikro-orm/postgresql";
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserRepository {
    constructor(
        private readonly em: EntityManager
    ) {}

    async getUserById(id: number): Promise<Users> {
        const user = await this.em.findOne(Users, { id: id });
        return user;
    }

    async getUserByEmail(email: string): Promise<Users> {
        const user = await this.em.findOne(Users, { email: email });
        return user;
    }
    
    async getUsersByName(name: string): Promise<Users[]> {
        const users = await this.em.find(Users, { name: name });
        return users;
    }

    async createUser(user: CreateUserDto): Promise<Users> {
        const newUser = new Users();
        newUser.name = user.firstName + " " + user.lastName;
        newUser.email = user.email;
        newUser.createdAt = new Date();
        newUser.updatedAt = new Date();
        newUser.password = user.password;

        await this.em.persistAndFlush(newUser);

        return newUser;
    }

    async updateUser(id:number, user: UpdateUserDto): Promise<boolean> {
        const userToUpdate = await this.em.findOne(Users, { id: id});
        userToUpdate.name = user.firstName + " " + user.lastName;
        userToUpdate.email = user.email;
        userToUpdate.updatedAt = new Date();
        userToUpdate.password = await argon2.hash(user.password);

        await this.em.persistAndFlush(userToUpdate);

        return true;
    }

    async deleteUser(id: number): Promise<string> {
        const userToDelete = await this.em.findOne(Users, { id: id });
        this.em.removeAndFlush(userToDelete);
        return "User deleted successfully";
    }
}
