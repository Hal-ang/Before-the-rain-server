import { User } from './user.entity';

export type CreatedUserReponse = Omit<User, 'survey'>;
