import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserTokenDto } from './userDto';
import { CreatedUserReponse } from './users.type';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(user: CreateUserDto): Promise<CreatedUserReponse>;
    updateUserToken(updateUserToken: UpdateUserTokenDto, { headers }: Request): Promise<void>;
}
