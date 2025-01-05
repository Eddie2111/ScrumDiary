import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from 'src/user/dto/login-user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'email',
        });
    }

    async validate(loginUser: LoginUserDto): Promise<any> {
        const user = await this.authService.validateUser(loginUser);
        if (!user) throw new UnauthorizedException();
        return user;
    }
}
