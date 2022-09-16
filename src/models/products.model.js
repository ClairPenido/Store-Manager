const connection = require('./connection');

const getAllProducts = async () => {
  const arrayAllProducts = connection.execute('SELECT * FROM StoreManager.products');
  return arrayAllProducts;
};

const getProductsByID = async (id) => {
  const [[arrayProductID]] = await connection
    .execute('SELECT id, name FROM StoreManager.products WHERE id = ?', [id]);
  return arrayProductID;
};

const getInsertProduct = async (productName) => {
  const [insertProduct] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES(?);', [productName]);
  console.log('aqui', productName);
  const newProduct = { id: insertProduct.insertId, name: productName.name };
  console.log(newProduct);
  return newProduct;
};

const updateProduct = async (product, id) => {
  const productToUpdate = await connection
    .execute('UPDATE StoreManager.products SET name = ? WHERE id = ?;', [product.name, id]);
  // console.log('update:', productToUpdate);
  return productToUpdate;
};

const deleteProduct = async (id) => {
  const productToDelete = await connection
    .execute('DELETE FROM StoreManager.products WHERE id = ? ', [id]);
  return productToDelete;
};
  
module.exports = {
  getAllProducts,
  getProductsByID,
  getInsertProduct,
  updateProduct,
  deleteProduct,
};