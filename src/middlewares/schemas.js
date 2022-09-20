const Joi = require('joi');
// validacao de campo sem nada
const nameSchema = Joi.object({
  name: Joi.string().min(5).required().messages({
    'string.min': '"name" length must be at least 5 characters long',
    'string.empty': '"name" is required',
    'any.required': '"name" is required',
  }),
});

const saleSchema = Joi.array().items({
  productId: Joi.number().required().messages({
    'number.empty': '"productId" is required',
    'any.required': '"productId" is required',
  }),
  quantity: Joi.number().min(1).required().messages({
    'number.min': '"quantity" must be greater than or equal to 1',
    'number.empty': '"quantity" is required',
    'any.required': '"quantity" is required',
  }),
});

module.exports = {
  nameSchema,
  saleSchema,
};