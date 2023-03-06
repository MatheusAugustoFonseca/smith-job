import { IUser } from '../interfaces';
import schemaUser from './schemaUser';

const userValidation = (newUser: IUser) => {
  const { error } = schemaUser.validate(newUser);
  if (error) {
    return { type: error, message: error.message };
  }

  return { type: null, message: '' };
};

export default userValidation;