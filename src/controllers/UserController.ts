import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from '../services/user.service';
import { User } from '../entities/User';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Get()
    AllUsers() {
        return this.userService.getAllUsers();
    }

    @Post()
    createuser(@Body() user: User) {
        return this.userService.createUser(user);
    }

    @Put()
    updateUser(@Body() user: User) {
        return this.userService.updateUser(user);
    }

    @Get(':id')
    findUserById(@Param('id') id: number) {
        return this.userService.getOneUser(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(id);
    }
}