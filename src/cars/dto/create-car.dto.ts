import { IsString } from "class-validator";

export class CreateCarDto{

    @IsString({ message: `The band most be a cool string `})
    readonly brand: string;

    @IsString()
    readonly model: string;
}