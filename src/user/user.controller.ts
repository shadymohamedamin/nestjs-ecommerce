import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.findAll();
  }


  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }


  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }

 
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
}
