const saleService = require('../services/sales.service');

const getSaleDate = async (_req, res) => {
  const arraySale = await saleService.returnSaleDate();
  console.log(arraySale);
  return res.status(200).json({ message: `aqui ${arraySale}` });
};

const getSaleProduct = async (req, res) => {
  const getInput = await saleService.returnSaleProduct(req.body);
  if (getInput === false) {
    return res.status(404).json({ message: 'Product not found' });
  }
  console.log('controller', req.body);
  return res.status(201).json(getInput);
};

const getAllSales = async (req, res) => {
  const getSales = await saleService.returnAllProducts();
  return res.status(200).json(getSales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const getSalesId = await saleService.returnSaleByID(id);
  console.log(getSalesId);
  return getSalesId.length !== 0 ? (res.status(200).json(getSalesId))
    : (res.status(404).json({ message: 'Sale not found' }));
};

module.exports = {
  getSaleDate,
  getSaleProduct,
  getAllSales,
  getSalesById,
};
