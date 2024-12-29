import { IsNotEmpty, IsString } from "class-validator";

export class CreateBoardDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    description!: string;
}
