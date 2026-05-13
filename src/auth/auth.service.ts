import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDTO } from './dto/registerUser.dto';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService,
        private jwtService: JwtService
    ) {}

    async registerUser(registerUserDTO: RegisterDTO){

        const saltRounds = 10

        const hash = await bcrypt.hash(registerUserDTO.password, saltRounds);

        console.log(registerUserDTO)

        //Logic to build the register functionality
        //Check if the email is already registred 
        //Hash the password
        //Store the user into db 
        //generate jwt token for the user
        //send token in response
        



        const user = await this.userService.createUser({
            ...registerUserDTO, password: hash} );

        if (!user) {
            throw new Error('Failed to create user');
        }

        const payload = {sub: user._id}
        const token = await this.jwtService.signAsync(payload)
        console.log(token)
        return token;
    }
}
