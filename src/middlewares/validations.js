const schemas = require('./schemas');

const hasNoError = async (req, res, next) => {
  const { name } = req.body;
  const validation = schemas.nameSchema.validate({ name });
  if (validation.error === undefined) {
    next();
  }
};

const validationsCheck = async (req, res, next) => {
  const { name } = req.body;
  const validation = schemas.nameSchema.validate({ name });
  console.log('aqui', validation.error);
  if (validation.error.details[0].type === 'string.min') {
    return res.status(422).json({ message: validation.error.details[0].message });
  }
  if (validation.error.details[0].type === 'string.empty'
    || validation.error.details[0].type === 'any.required') {
    return res.status(400).json({ message: validation.error.details[0].message });
  }
  next();
};

module.exports = {
  validationsCheck,
  hasNoError,
};