import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { register } from 'module';
import { RegisterDTO } from './dto/registerUser.dto';

@Controller('auth') // Prefix (route) for all routes in this controller 
export class AuthController {

    //Dependency Injection of AuthService to use its methods
    constructor(private readonly authService: AuthService){}


    @Post("register")
    register(@Body() registerUserDTO: RegisterDTO){
        //Logic for user register  
        return this.authService.registerUser(registerUserDTO);
    }
}
