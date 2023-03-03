import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class UserModel {
  // levar todos os metodos da user (para acessar io banco)
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async register(newUser: IUser): Promise<IUser> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [newUser.username, newUser.vocation, newUser.level, newUser.password],
    );
    const userRegistered = {
      id: insertId,
      username: newUser.username,
      vocation: newUser.vocation,
      level: newUser.level,
      password: newUser.password,
    };
    return userRegistered;
  }
}