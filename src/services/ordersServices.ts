import { IOrders } from '../interfaces';
import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';
import productsIdsValidation from '../validationsWithJoi/productsIdsValidation';
import ProductsModel from '../models/productsModel';

export default class OrdersService {
  public ordersModel: OrdersModel;

  public productsModel: ProductsModel;

  constructor() {
    this.ordersModel = new OrdersModel(connection);
    this.productsModel = new ProductsModel(connection);
  }

  public async getAll(): Promise<IOrders[]> {
    const result = await this.ordersModel.getAll();
    return result;
  }

  public createOrder = async (userId: number, productsIds:number[]) => {
    const { type, message } = productsIdsValidation(productsIds);
    if (type) {
      return { type: 422, message };
    }
    const orderId = await this.ordersModel.createOrder(userId);
    await this.productsModel.update(productsIds, orderId);
    return { type: null, message: { userId, productsIds } };
  };
}