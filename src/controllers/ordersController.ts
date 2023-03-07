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

  public createOrder = async (req: Request, res: Response) => {
    const { id } = res.locals.user;
    const { productsIds } = req.body;
    const { type, message } = await this.orderService.createOrder(id, productsIds);
    if (type) {
      return res.status(type).json({ message });
    }
    return res.status(201).json(message);
  };
}
