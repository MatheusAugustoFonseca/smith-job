import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

export default class ProductsController {
  public productsService: ProductsService;

  constructor() {
    this.productsService = new ProductsService();
  }

  public async createProduct(req: Request, res: Response) {
    // console.log(this, 'THIS');
    const newProduct = req.body;
    const { type, message } = await this.productsService.createProduct(newProduct);
    if (type) {
      return res.status(type).json({ message });
    }
    return res.status(201).json(message);
  }

  public async getAll(_req: Request, res: Response) {
    const result = await this.productsService.getAll();
    return res.status(200).json(result);
  }
}