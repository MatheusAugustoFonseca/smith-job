import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  public loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    const userLogin = req.body;
    const { type, message } = await this.loginService.login(userLogin);

    if (type) {
      return res.status(401).json({ message });
    }

    return res.status(200).json({ token: message });
  };
}