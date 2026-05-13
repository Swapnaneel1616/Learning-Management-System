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

            if(err.code === 11000){
                throw new ConflictException("Email already exists");
            }
        }
    }

}
