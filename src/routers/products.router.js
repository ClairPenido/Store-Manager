const express = require('express');
const productController = require('../controllers/products.controller');
const productValidation = require('../middlewares/validations');

const router = express.Router();

router.get('/:id', productController.getProductsByID); // retornar produtos pelo id

router.put('/:id', productValidation.validationsCheck, productController.updateProduct); // retorna produto atualizado

router.post('/', productValidation.validationsCheck, productController.insertNewProject); // retornar produto novo

router.delete('/:id', productValidation.validationsCheck, productController.deleteProduct);

router.get('/', productController.getAllProducts); // retornar todos os produtos cadastrados

module.exports = router; 