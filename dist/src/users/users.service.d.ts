import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './userDto';
import { Survey } from '@root/surveys/survey.entity';
import { CreatedUserReponse } from './users.type';
export declare class UsersService {
    private usersRepository;
    private surveyRepository;
    constructor(usersRepository: Repository<User>, surveyRepository: Repository<Survey>);
    createUser(createUserDto: CreateUserDto): Promise<CreatedUserReponse | null>;
    updateUserToken(fcmToken: string, userId: string): Promise<void>;
}
