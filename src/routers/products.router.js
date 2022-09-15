const express = require('express');
const productController = require('../controllers/products.controller');
const productValidation = require('../middlewares/validations');

const router = express.Router();

router.put('/:id', productController.getProductsByID);

router.get('/:id', productController.getProductsByID);

router.post('/', productValidation.validationsCheck, productController.insertNewProject);

router.get('/', productController.getAllProducts); 

module.exports = router;