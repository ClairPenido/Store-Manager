const express = require('express');
const salesController = require('../controllers/sales.controller');
const saleValidation = require('../middlewares/validations');

const router = express.Router();

router.post('/', saleValidation.validationsSale, salesController.getSaleProduct);
router.get('/', salesController.getAllSales);
router.get('/:id', salesController.getSalesById);

module.exports = router; 