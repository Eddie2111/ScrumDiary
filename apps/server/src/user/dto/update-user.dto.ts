import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, MaxLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsString()
    @MaxLength(18)
    firstName: string;

    @IsString()
    @MaxLength(18)
    lastName: string;
}
