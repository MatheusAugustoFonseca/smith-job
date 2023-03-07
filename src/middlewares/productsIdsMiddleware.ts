import { NextFunction, Request, Response } from 'express';

const productsIdsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  } 

  return next();
};

export default productsIdsMiddleware;