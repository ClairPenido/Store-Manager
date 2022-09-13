const connection = require('./connection');

const getAllProducts = () => connection.execute('SELECT * FROM StoreManager.products');

const getProductsByID = async (id) => {
  const [[arrayProductID]] = await connection
    .execute('SELECT id, name FROM StoreManager.products WHERE id = ?', [id]);
  return arrayProductID;
};

const insertProduct = async (productName) => {
  const [insertProduct1] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES(?);', [productName]);
  const newProduct = { id: insertProduct1.insertId, name: productName.name };
  return newProduct;
};
  
module.exports = {
  getAllProducts,
  getProductsByID,
  insertProduct,
};