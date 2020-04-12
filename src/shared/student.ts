import {IsDate, IsDateString, IsEmail, IsMongoId, IsNotEmpty, IsString} from "class-validator";
import {Type} from "class-transformer";

export class Student {
    @IsString()
    @IsMongoId()
    _id: string;

    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsDate()
    @Type(() => Date)
    dob: Date;

    @IsEmail()
    email: string;

    @IsString()
    address: string;

    @IsString()
    tel: string;

    @IsString()
    class: string;

}