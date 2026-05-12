import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // Prefix (route) for all routes in this controller 
export class AuthController {

    //Dependency Injection of AuthService to use its methods
    constructor(private readonly authService: AuthService){}


    @Post("register")
    register(){
        //Logic for user register 
        return this.authService.registerUser();
    }
}
