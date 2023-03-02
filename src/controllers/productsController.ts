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
    const result = await this.productsService.createProduct(newProduct);
    return res.status(201).json(result);
  }

  public async getAll(_req: Request, res: Response) {
    const result = await this.productsService.getAll();
    return res.status(200).json(result);
  }
}