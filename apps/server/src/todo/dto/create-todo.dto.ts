import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Enum_TASK_STATUS } from "src/common/enums/status.enums";

export class CreateTodoDto {
    @IsString()
    @IsNotEmpty()
    name!:string

    @IsString()
    @IsNotEmpty()
    description!:string

    @IsString()
    @IsNotEmpty()
    status!: Enum_TASK_STATUS;

    @IsNumber()
    @IsNotEmpty()
    board!: number;
}   
