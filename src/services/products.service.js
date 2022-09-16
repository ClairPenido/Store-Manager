const productModel = require('../models/products.model');

const returnAllProducts = async () => productModel.getAllProducts();

const returnProductByID = async (id) => productModel.getProductsByID(id);

const returnInsertProduct = async (productName) => productModel.getInsertProduct(productName);

const returnUpdateProduct = async (product, id) => productModel.updateProduct(product, id);

const productToDelete = async (id) => (productModel.deleteProduct(id));

module.exports = {
  returnAllProducts,
  returnProductByID,
  returnInsertProduct,
  returnUpdateProduct,
  productToDelete,
};