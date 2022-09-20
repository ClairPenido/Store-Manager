const connection = require('./connection');

const insertNewSale = async () => { // id + date
  const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.sales () VALUES();');
  return insertId;
};

const insertNewSaleProduct = async (saleID, productID, quant) => { // aqui será sale_id + product_id + quantity
  console.log('model', saleID, productID, quant);
  const [insertProdQuant] = await connection
    .execute(`INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
     VALUES (?, ?, ?);`, [saleID, productID, quant]);
  return insertProdQuant;
};

module.exports = {
  insertNewSale,
  insertNewSaleProduct,
};