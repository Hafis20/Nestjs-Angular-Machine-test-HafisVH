import { Body, Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UserObj, UpdateUserObj, UserIdObj } from './user.dto';

@Controller('api/user')
export class UserController {
    constructor(private userService: UserService) { }

    // Route for get the user
    @Get('getUsers')
    getAllUsers(@Req() req:Request){
        return this.userService.getAllUsers();
    }

    // Route for add a user
    @Post('addUser')
    addUser(@Body() userObj: UserObj, @Req() req: Request) {
        return this.userService.addUser(userObj);
    }

    // Route for update a user
    @Put('updateUser')
    updateUser(@Body() updateUserObj: UpdateUserObj, @Req() req: Request) {
        console.log(updateUserObj)
        return this.userService.updateUser(updateUserObj);
    }

    // Route for delete a user
    @Post('deleteUser')
    deleteUser(@Body() userIdObj: UserIdObj, @Req() req:Request) {
        return this.userService.deleteUser(userIdObj);
    }
}
