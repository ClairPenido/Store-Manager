const express = require('express');
const productController = require('../controllers/products.controller');
const validateName = require('../middlewares/validations');
const hasNoError = require('../middlewares/validations');

const router = express.Router();

router.put('/:id', productController.getProductsByID);

router.get('/:id', productController.getProductsByID);

router.post('/',
  validateName.validationsCheck, hasNoError.hasNoError, productController.insertNewProject);

router.get('/', productController.getAllProducts); 

module.exports = router;