import connection from '../models/connection';
import ProductsModel from '../models/productsModel';
import { IProducts, IStatus } from '../interfaces';
import productValidation from '../validationsWithJoi/productValidation';

export default class ProductsService {
  public productsModel: ProductsModel;

  constructor() {
    this.productsModel = new ProductsModel(connection);
  }

  public async createProduct(product: IProducts): Promise< IStatus > {  
    const { type, message } = productValidation(product);
    if (type) {
      return { status: 422, message };
    }
    const result = await this.productsModel.createProduct(product);
    return { status: null, message: result };
  }

  public async getAll() {
    const result = await this.productsModel.getAll();
    return result;
  }
}