import { IUser } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/usersModel';
import generateToken from '../utils/jwt';

export default class UserService {
  public usersModel: UserModel;

  constructor() { 
    this.usersModel = new UserModel(connection);
  }

  public async register(newUser: IUser): Promise<string> {
    await this.usersModel.register(newUser);
    const token = generateToken(newUser);
    return token;
  }
}