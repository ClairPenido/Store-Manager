const productController = require('../services/products.service');

const getAllProducts = async (req, res) => {
  const [arrayProducts] = await productController.returnAllProducts();
  return res.status(200).json(arrayProducts);
};

const getProductsByID = async (req, res) => {
  const { id } = req.params.id;
  console.log(id);
  const teste = await productController.returnProductByID(id);
  const productById = teste.find((p) => p.id === id);
  return productById ? (res.status(200).json(productById))
    : (res.status(404).json({ message: 'Product not found' }));
};

module.exports = {
  getAllProducts,
  getProductsByID,
};