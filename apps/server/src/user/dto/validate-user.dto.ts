import { IsNotEmpty, IsEmail, IsString } from "class-validator";

export class ValidateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
