const productModel = require('../models/products.model');

const returnAllProducts = async () => productModel.getAllProducts();

const returnProductByID = async (id) => productModel.getProductsByID(id);

module.exports = {
  returnAllProducts,
  returnProductByID,
};