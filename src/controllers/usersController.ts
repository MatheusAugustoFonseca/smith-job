import { Request, Response } from 'express';
import UserService from '../services/usersServices';

export default class UsersController {
  public userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public register = async (req: Request, res: Response) => {
    const newUser = req.body;
    const token = await this.userService.register(newUser);
    return res.status(201).json({ token });
  };
}