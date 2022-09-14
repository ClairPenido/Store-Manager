const productModel = require('../models/products.model');

const returnAllProducts = async () => productModel.getAllProducts();

const returnProductByID = async (id) => productModel.getProductsByID(id);

const returnInsertProduct = async (productName) => productModel.getInsertProduct(productName);

const returnUpdateProduct = async (name, id) => productModel.updateProduct(name, id);

module.exports = {
  returnAllProducts,
  returnProductByID,
  returnInsertProduct,
  returnUpdateProduct,
};