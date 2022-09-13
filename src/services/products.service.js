const productModel = require('../models/products.model');

const returnAllProducts = async () => productModel.getAllProducts();

const returnProductByID = async (id) => productModel.getProductsByID(id);

const returnInsertProduct = async (productName) => productModel.insertProduct(productName);

module.exports = {
  returnAllProducts,
  returnProductByID,
  returnInsertProduct,
};