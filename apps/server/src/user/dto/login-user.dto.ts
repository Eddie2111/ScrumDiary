import { IsString, MaxLength } from 'class-validator';

export class LoginUserDto{

    @IsString()
    @MaxLength(35)
    email: string;

    @IsString()
    @MaxLength(24)
    password: string;
}
