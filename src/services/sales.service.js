const saleModel = require('../models/sales.model');
const productModel = require('../models/products.model');

const returnSaleDate = async () => saleModel.insertNewSale();

const returnSaleProduct = async (inputs) => {
  console.log('aqui', inputs);
  // await saleModel.insertNewSaleProduct(insertId, inputs.productId, inputs.quantity);
  const checkProduct = await Promise
    .all(inputs.map((e) => productModel.getProductsByID(e.productId)));
  
  if (checkProduct.includes(undefined)) {
    return false;
  }
  const saleID = await saleModel.insertNewSale();
  inputs.forEach((e) => {
    saleModel.insertNewSaleProduct(saleID, e.productId, e.quantity);
  });
  const newSales = {
    id: saleID,
    itemsSold: inputs,
  };
  return newSales;
};

const returnAllSales = async () => {
  const allSales = saleModel.getAllSales();
  return allSales;
};

const returnSaleByID = async (id) => saleModel.getSaleById(id);
 
module.exports = {
  returnSaleDate,
  returnSaleProduct,
  returnAllSales,
  returnSaleByID,
};