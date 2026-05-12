import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    registerUser(){

        //Logic to build the register functionality
        //Check if the email is already registred 
        //Hash the password
        //Store the user into db 
        //generate jwt token for the user
        //send token in response
        



        return {message: "User registered successfully!"};
    }
}
