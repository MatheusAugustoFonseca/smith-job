import { NextFunction, Request, Response } from 'express';

const productMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  } 
  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  } 
  return next();
};

export default productMiddleware;