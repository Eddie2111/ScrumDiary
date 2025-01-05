import argon2 from "argon2";
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from "./auth.constants";
import { LoginUserDto } from "src/user/dto/login-user.dto";
import { Users } from "src/common/entity/users.entity";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(loginDto: LoginUserDto): Promise<any> {
        const user = await this.userService.findOneByEmail(loginDto.email);
        const passwordCheck = await this.passwordCheck(user.password, loginDto.password);
        if (user && passwordCheck) {
            const token = this.createToken(user);
            return token;
        }
        return {access_token : ""};
    }

    createToken(user: Users): { access_token: string } {
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload, jwtConstants),
        };
    }

    async passwordCheck (hash: string, password: string) {
        return await argon2.verify(hash, password);
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}