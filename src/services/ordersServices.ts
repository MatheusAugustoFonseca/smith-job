import { IOrders } from '../interfaces';
import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';

export default class OrdersService {
  public ordersModel: OrdersModel;

  constructor() {
    this.ordersModel = new OrdersModel(connection);
  }

  public async getAll(): Promise<IOrders[]> {
    const result = await this.ordersModel.getAll();
    return result;
  }
}