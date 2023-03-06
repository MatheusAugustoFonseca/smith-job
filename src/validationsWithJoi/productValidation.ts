import { IProducts } from '../interfaces';
import schemaProduct from './schemaProduct';

const productValidation = (product: IProducts) => {
  const { error } = schemaProduct.validate(product);
  if (error) {
    return { type: error, message: error.message };
  }
  // if (!product.name) return { status: 499, message: '"name" is required' };
  return { type: null, message: '' };
};

// const productValidation = (product: IProducts) => {
//   const isValid = schemaProduct.validate(product);

//   // if (!product.name) return { status: 401, message: '"name" is required' };
//   return isValid;
// };

export default productValidation;