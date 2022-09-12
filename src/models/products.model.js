const connection = require('./connection');

const getAllProducts = () => connection.execute('SELECT * FROM StoreManager.products');

const getProductsByID = (id) => connection.execute(
  'SELECT id, name FROM StoreManager.products WHERE id = ?', [id],
);
  
module.exports = {
  getAllProducts,
  getProductsByID,
};