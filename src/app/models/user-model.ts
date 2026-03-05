export interface UserModel {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
  admin: boolean;
  token?: string;
}
