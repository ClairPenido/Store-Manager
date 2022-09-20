const schemas = require('./schemas');
  
const validationsCheck = async (req, res, next) => {
  const { name } = req.body;
  const validation = schemas.nameSchema.validate({ name });
  const validationError = validation.error;
  // console.log('mensagem erro', validation);
  if (!validationError) {
    return next();
  }
  if (validationError.details[0].type === 'string.min') {
    return res.status(422).json({ message: validation.error.details[0].message });
  }
  if (validationError.details[0].type === 'string.empty'
    || validationError.details[0].type === 'any.required') {
    return res.status(400).json({ message: validation.error.details[0].message });
  }
};

const validationsSale = async (req, res, next) => {
  const validation = schemas.saleSchema.validate(req.body);
  const validationError = validation.error;
  console.log('mensagem erro', validation);
  if (!validationError) {
    return next();
  }
  if (validationError.details[0].type === 'number.min') {
    return res.status(422).json({ message: validation.error.message });
  }
  if (validationError.details[0].type === 'number.empty'
    || validationError.details[0].type === 'any.required') {
    return res.status(400).json({ message: validation.error.message });
  }
};

module.exports = {
  validationsCheck,
  validationsSale,
};