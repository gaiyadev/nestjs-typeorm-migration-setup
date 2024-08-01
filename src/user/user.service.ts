import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataSource, Repository } from "typeorm";
import { connectionSource } from "../database/config/typeorm";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {
  private readonly dataSource: DataSource = connectionSource;
  constructor(
    @InjectRepository(User)
    private readonly  userRepository: Repository<User>) {
  }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

 async findAll() {
 return  await  this.userRepository.find({relations:['posts']});

    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
