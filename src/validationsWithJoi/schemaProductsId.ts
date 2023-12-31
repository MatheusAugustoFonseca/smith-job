import Joi from 'joi';

const schemaProductsId = Joi.array().items(Joi.number().required()).label('productsIds').messages({
  'array.includesRequiredUnknowns': '{{#label}} must include only numbers',
});

export default schemaProductsId;
