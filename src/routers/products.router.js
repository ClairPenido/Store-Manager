const express = require('express');
const productController = require('../controllers/products.controller');
const validateName = require('../middlewares/validations');
//! tambem estou com erro no sql, pois o database não ta chegando?

const router = express.Router();

router.put('/:id', productController.getProductsByID);

router.get('/:id', productController.getProductsByID);

router.post('/', validateName.validationsCheck, productController.insertNewProject);

router.get('/', productController.getAllProducts); 

module.exports = router;