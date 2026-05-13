import {IsEmail, IsString} from 'class-validator'
export class RegisterDTO{
    @IsString()
    fName : string
    @IsString() 
    lName : string
    
    @IsEmail()
    email: string
    @IsString()
    password: string
}