const productController = require('../services/products.service');

const getAllProducts = async (req, res) => {
  const [arrayProducts] = await productController.returnAllProducts();
  return res.status(200).json(arrayProducts);
};

const getProductsByID = async (req, res) => {
  const { id } = req.params;
  const productbyID = await productController.returnProductByID(id);
  return productbyID ? (res.status(200).json(productbyID))
    : (res.status(404).json({ message: 'Product not found' }));
};

const insertNewProject = async (req, res) => {
  console.log('ola');
  const insertProduct = await productController.returnInsertProduct(req.body);
  return res.status(201).json(insertProduct);
};

module.exports = {
  getAllProducts,
  getProductsByID,
  insertNewProject,
};