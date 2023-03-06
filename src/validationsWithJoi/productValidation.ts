import { IProducts } from '../interfaces';
import schemaProduct from './schemaProducts';

const productValidation = (product: IProducts) => {
  const { error } = schemaProduct.validate(product);
  if (error) {
    return { type: error, message: error.message };
  }

  return { type: null, message: '' };
};

export default productValidation;