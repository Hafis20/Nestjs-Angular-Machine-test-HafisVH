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
            const users = await this.userModel.find();
            // If there is no users
            if (!users.length) {
                throw new HttpException('Users Not Found', HttpStatus.NOT_FOUND);
            }
            //Otherwise return the users list
            return users;
        } catch (error) {
            // If error is not an instance of HttpException
            if (!(error instanceof HttpException)) {
                throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
            }
            // Otherwise do this 
            throw error;
        }
    }


    // Function for adding the user 
    async addUser(obj: UserObj) {
        // Destructuring the object
        const { name, email, phoneNumber, address } = obj;

        // Checking all the data is available
        if (!name || !email || !phoneNumber || !address) {
            throw new HttpException('Required data not found', HttpStatus.BAD_REQUEST)
        }
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
            //If there is no one updated 
            if (!updatedUser) {
                throw new HttpException('User not found', HttpStatus.NOT_FOUND);
            }
            // Otherwise return the updatedUser
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
             
            // If no on deleted
            if (!deletedUser) {
                throw new HttpException('User not found', HttpStatus.NOT_FOUND);
            }
            // Other wise return the deleted user data;
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
