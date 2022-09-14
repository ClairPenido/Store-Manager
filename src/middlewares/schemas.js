const Joi = require('joi');
// validacao de campo sem nada
const nameSchema = Joi.object({
  name: Joi.string().min(5).required().messages({
    'string.min': '"name" length must be at least 5 characters long',
    'string.empty': '"name" is required',
    'any.required': '"name" is required',
  }),
});

module.exports = {
  nameSchema,
};