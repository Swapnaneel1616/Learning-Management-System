import { Injectable } from '@nestjs/common';
import { RegisterDTO } from 'src/auth/dto/registerUser.dto';

@Injectable()
export class UserService {

    createUser(registerUserDTO: RegisterDTO){
        
        return {message: "User created"}
    }

}
