const connection = require('./connection');

const insertNewSale = async (productName) => { // id + date
  const [insertProduct] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES(?);', [productName]);
  console.log('aqui', productName);
  const newProduct = { id: insertProduct.insertId, name: productName.name };
  console.log(newProduct);
  return newProduct;
};

const insertNewSaleProduct = async (productName) => { // aqui será sale_id + product_id + quantity
  const [insertProduct] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES(?);', [productName]);
  const newProduct = { id: insertProduct.insertId, name: productName.name };
  console.log(newProduct);
  return newProduct;
};

module.exports = {
  insertNewSale,
  insertNewSaleProduct,
};