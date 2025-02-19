
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService) {
        super();
    }

    async validate(email: string, password: string): Promise<any> {
        const user = await this.userService.validateUser({email,password});
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
