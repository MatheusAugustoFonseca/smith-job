import connection from '../models/connection';
import ProductsModel from '../models/productsModel';
import { IProducts } from '../interfaces';

export default class ProductsService {
  public productsModel: ProductsModel;

  constructor() {
    this.productsModel = new ProductsModel(connection);
  }

  public async createProduct(product: IProducts): Promise<IProducts> {
    const result = await this.productsModel.createProduct(product);
    return result;
  }
}