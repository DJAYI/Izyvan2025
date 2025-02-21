import { User } from './User';

export interface Session {
  token: string;
  status: string;
  message: string;
  user: User;
}
