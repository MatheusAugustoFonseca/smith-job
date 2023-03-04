import { Request, Response } from 'express';
import OrdersService from '../services/ordersServices';

export default class OrdersController {
  public orderService: OrdersService;

  constructor() {
    this.orderService = new OrdersService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.orderService.getAll();
    return res.status(200).json(result);
  };
}
