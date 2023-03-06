import { Request, Response } from 'express';
import UserService from '../services/usersServices';

export default class UsersController {
  public userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  // public register = async (req: Request, res: Response) => {
  //   const newUser = req.body;
  //   const token = await this.userService.register(newUser);
  //   return res.status(201).json({ token });
  // };
  public register = async (req: Request, res: Response) => {
    const newUser = req.body;
    const { type, message } = await this.userService.register(newUser);
    if (type) {
      return res.status(type).json({ message });
    }
    return res.status(201).json(message);
  };
}