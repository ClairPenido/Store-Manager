const express = require('express');
const productController = require('../controllers/products.controller');

const router = express.Router();

router.get('/:id', productController.getProductsByID);

router.post('/', productController.insertNewProject);

router.get('/', productController.getAllProducts); 

module.exports = router;