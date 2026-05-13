import { Body, Controller, Post, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/registerUser.dto';
import { LoginDTO } from './dto/loginUser.dto';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';

@Controller('auth') // Prefix (route) for all routes in this controller 
export class AuthController {

    //Dependency Injection of AuthService to use its methods
    constructor(private readonly authService: AuthService,
         private readonly userService: UserService){}


    @Post("register")
    async register(@Body() registerUserDTO: RegisterDTO){
        //Logic for user register  
        return await this.authService.registerUser(registerUserDTO);
    }

    @Post("login")
    async login(@Body() loginUserDTO: LoginDTO){
        return await this.authService.loginUser(loginUserDTO)
    }


    @UseGuards(AuthGuard)
    @Get('profile')
    async getProfile(@Request() req){

        const userId = req.user.sub 

        const user = await this.userService.getUserById(userId)

        console.log(user)
        return {
            id : user?._id,
            fname: user?.fname,
            lname: user?.lname,
            email: user?.email
        };

    }
}
