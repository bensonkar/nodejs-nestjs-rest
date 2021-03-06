import { User } from '../entities/User';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from '../controllers/UserController';
import { UserService } from '../services/user.service';


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {
}