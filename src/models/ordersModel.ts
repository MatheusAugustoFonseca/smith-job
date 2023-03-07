import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IOrders } from '../interfaces';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrders[]> {
    const query = `SELECT orders.id, orders.user_id AS userId,
     JSON_ARRAYAGG(products.id) AS productsIds FROM Trybesmith.orders
     INNER JOIN Trybesmith.products ON orders.id = products.order_id GROUP BY orders.id`;

    const result = await this.connection.execute(query);
    const [rows] = result;

    return rows as IOrders[];
  }

  public async createOrder(userId: number) {
    const query = 'INSERT INTO Trybesmith.orders (user_id) VALUE (?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [userId]);
    return insertId;
  }
}
