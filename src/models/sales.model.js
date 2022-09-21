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

const getAllSales = async () => {
  const [allSales] = await connection
    .execute(`SELECT sale_id as saleId, product_id as productId, quantity, date 
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON s.id = sp.sale_id;`);
  return allSales;
};

const getSaleById = async (id) => {
  const [sales] = await connection
    .execute(`SELECT product_id as productId, quantity, date FROM StoreManager.sales_products AS sp
INNER JOIN StoreManager.sales AS s
ON s.id = sp.sale_id
WHERE sale_id = ?;`, [id]);
  return sales;
};

module.exports = {
  insertNewSale,
  insertNewSaleProduct,
  getAllSales,
  getSaleById,
};