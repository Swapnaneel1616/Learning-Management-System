import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDTO } from 'src/auth/dto/registerUser.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) {}
    async createUser(registerUserDTO: RegisterDTO){
        
        try{
            return await this.userModel.create({
            fname: registerUserDTO.fName,
            lname: registerUserDTO.lName,
            email: registerUserDTO.email,
            password: registerUserDTO.password
        })
        }
        catch(err){
            console.log(err)
            const DUPLICATE_KEY_CODE = 11000;
            if(err.code === DUPLICATE_KEY_CODE){
                throw new ConflictException("Email already exists");
            }
            throw err; // Re-throw other errors
        }
    }

    

}
