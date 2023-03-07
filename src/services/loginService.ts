import { ILogin, IStatus } from '../interfaces';
import connection from '../models/connection';
import LoginModel from '../models/loginModel';
import { generateToken } from '../utils/jwt';

export default class LoginService {
  public loginModel: LoginModel;

  constructor() {
    this.loginModel = new LoginModel(connection);
  }

  public async login(user: ILogin): Promise<IStatus> {
    const { username, password } = user;
    const result = await this.loginModel.login(username, password);
    if (!result) {
      return { status: 401, type: 'UNAUTHORIZED', message: 'Username or password invalid' };
    }

    const token = generateToken({ 
      id: result.id,
      username: result.username,
      level: result.level,
      vocation: result.vocation,
    });
    return { type: null, message: token };
  }
}