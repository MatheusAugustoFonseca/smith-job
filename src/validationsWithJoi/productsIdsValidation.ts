import schemaProductsId from './schemaProductsId';

const productsIdsValidation = (productsIds: number[]) => {
  const { error } = schemaProductsId.validate(productsIds);
  if (error) {
    return { type: 422, message: error.message };
  }

  return { type: null, message: '' };
};

export default productsIdsValidation;