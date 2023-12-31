import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProducts } from '../interfaces';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createProduct(product: IProducts): Promise<IProducts> {
    const { name, amount } = product;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products(name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const newProduct = {
      id: insertId,
      name,
      amount,
    };
    return newProduct;
  }

  public async getAll() {
    const query = 'SELECT * FROM Trybesmith.products';
    const result = await this.connection.execute(query);
    const [rows] = result;

    return rows as IProducts[];
  }

  public async update(productsIds: number[], orderId: number) {
    const query = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
    const promises = productsIds.map((id) => this.connection.execute(query, [orderId, id]));
    Promise.all(promises);
  }
}
