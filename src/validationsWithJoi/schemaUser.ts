import Joi from 'joi';

const schemaUser = Joi.object({
  username: Joi.string().min(3).required().label('username'),
  vocation: Joi.string().min(3).required().label('vocation'),
  level: Joi.number().integer().min(1).required()
    .label('level'),
  password: Joi.string().min(8).required().label('password'),
  
});

export default schemaUser;