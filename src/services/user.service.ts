import { User } from '../entities/User';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    try {
      const users = await this.userRepository.find();
      return users;
    } catch (e) {
      throw e;
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      const data = await this.userRepository.save(user);
      return data;
    } catch (e) {
      throw e;
    }
  }

  async getOneUser(id: number): Promise<User> {
    try {
      const data = await this.userRepository.findOne(id);
      if (!data) {
        throw new NotFoundException('user not found with specified id');
      }
      return data;
    } catch (e) {
      throw e;
    }
  }

  async updateUser(user: User): Promise<any> {
    try {
      const data = await this.userRepository.findOne(user.id);
      if (!data) {
        throw new NotFoundException('user not found with specified id');
      }
      if (user.name) {
        data.name = user.name;
      }
      const updateRecord = await this.userRepository.save(data);
      return updateRecord;
    } catch (e) {
      throw e;
    }
  }

  async deleteUser(id: number): Promise<any> {
    try {
      const data = await this.userRepository.findOne(id);
      if (!data) {
        throw new NotFoundException('user not found with specified id');
      }
      await this.userRepository.delete(id);
      return "user deleted successfully";
    } catch (e) {
      throw e;
    }
  }

}
