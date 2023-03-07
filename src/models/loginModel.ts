import { Pool, RowDataPacket } from 'mysql2/promise';
import { IUser } from '../interfaces';
// import { ILogin, IUser } from '../interfaces';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login(username: string, password: string) {
    const [[result]] = await this.connection.execute<RowDataPacket[]>(
      `SELECT id, username FROM Trybesmith.users
        WHERE username = ? AND password = ?`,
      [username, password],
    );
    // const [user] = result;
    return result as IUser;
  }
}