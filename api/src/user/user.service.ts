import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { UpdateUserObj, UserIdObj, UserObj } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: mongoose.Model<User>
    ) { }

    //Function for getting the all the users
    async getAllUsers() {
        try {
            
        } catch (error) {
            if (!(error instanceof HttpException)) {
                throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
            }

            throw error;
        }
    }


    // Function for adding the user 
    async addUser(obj: UserObj) {
        // Destructuring the object
        const { name, email, phoneNumber, address } = obj;
        const addedUser = await this.userModel.create(obj);
        return addedUser;
    }

    // Function for updating the user details based on the given _id
    async updateUser(obj: UpdateUserObj) {

        try {
            // Destructuring the object
            const { _id, name, email, phoneNumber, address } = obj;

            // Finding the user with id and update their data
            const updatedUser = await this.userModel.findByIdAndUpdate(_id,
                {
                    $set: {
                        name,
                        email,
                        phoneNumber,
                        address,
                    }
                },
                {
                    new: true
                }
            )

            if (!updatedUser) {
                throw new HttpException('User not found', HttpStatus.NOT_FOUND);
            }

            return updatedUser;
        } catch (error) {
            // If the error is not an instance of HttpException, throw a generic 500 error
            if (!(error instanceof HttpException)) {
                throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
            }
            // Otherwise, rethrow the caught HttpException
            throw error;
        }
    }

    // Function for deleting the user based on the _id
    async deleteUser(obj: UserIdObj) {
        try {
            // Destructuring the userId from the body
            const { _id } = obj;
            const deletedUser = await this.userModel.findByIdAndDelete(_id);

            if (!deletedUser) {
                throw new HttpException('User not found', HttpStatus.NOT_FOUND);
            }
            return deletedUser;
        } catch (error) {
            // If the error is instance of Http exception
            if (!(error instanceof HttpException)) {
                throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
            }
            // Otherwise normal error
            throw error;
        }
    }

}
