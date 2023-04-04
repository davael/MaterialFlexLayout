import { RolGet } from './rol-get';

export interface IUserGet {
  userId: number;
  userPass: string;
  userName: string;
  userEmail: string;
  userActivo: boolean;
  userRolNavigation: RolGet;
}
