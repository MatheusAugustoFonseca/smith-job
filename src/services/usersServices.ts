import { IStatus, IUser } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/usersModel';
import { generateToken } from '../utils/jwt';
import userValidation from '../validationsWithJoi/userValidation';

export default class UserService {
  public usersModel: UserModel;

  constructor() { 
    this.usersModel = new UserModel(connection);
  }

  public async register(newUser: IUser): Promise<IStatus> {
    const { type, message } = userValidation(newUser);
    if (type) {
      return { status: 422, message };
    }
    await this.usersModel.register(newUser);
    const token = generateToken(newUser);
    return { status: null, message: token };
  }
}