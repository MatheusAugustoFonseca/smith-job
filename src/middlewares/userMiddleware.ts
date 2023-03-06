import { NextFunction, Request, Response } from 'express';

const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, level, password } = req.body;
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  } 
  if (!vocation) {
    return res.status(400).json({ message: '"vocation" is required' });
  } 
  if (level === undefined) {
    return res.status(400).json({ message: '"level" is required' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  return next();
};

export default userMiddleware;