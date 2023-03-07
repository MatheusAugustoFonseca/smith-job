import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

const generateToken = (user: IUser): string => {
  const jwtConfig = {
    expiresIn: '7d',
  };

  const token = jwt.sign(user, secret, jwtConfig);
  return token;
};

const authToken = (token: string) => jwt.verify(token, secret);

export { generateToken, authToken };