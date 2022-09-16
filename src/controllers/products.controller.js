const productService = require('../services/products.service');

const getAllProducts = async (req, res) => {
  const [arrayProducts] = await productService.returnAllProducts();
  return res.status(200).json(arrayProducts);
};

const getProductsByID = async (req, res) => {
  const { id } = req.params;
  const productbyID = await productService.returnProductByID(id);
  // console.log('productbyId', productbyID);
  return productbyID ? (res.status(200).json(productbyID))
    : (res.status(404).json({ message: 'Product not found' }));
};

const insertNewProject = async (req, res) => {
  // console.log('entrou insert');
  const insertProduct = await productService.returnInsertProduct(req.body);
  return res.status(201).json(insertProduct);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const hasProduct = await productService.returnProductByID(id);
  if (!hasProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }
  await productService.returnUpdateProduct(product, id);
  return res.status(200).json({ id, name: product.name });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const hasProduct = await productService.returnProductByID(id);
  if (!hasProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }
  await productService.productToDelete(id);
  return res.status(204);
  };

module.exports = {
  getAllProducts,
  getProductsByID,
  insertNewProject,
  updateProduct,
  deleteProduct,
};