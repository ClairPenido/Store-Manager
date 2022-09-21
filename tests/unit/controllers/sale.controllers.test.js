const sinon = require('sinon');
const { expect } = require('chai');
const { allSalesMock } = require('../mocks/sale.mock');

const saleController = require('../../../src/controllers/sales.controller');
const saleService = require('../../../src/services/sales.service');


describe('Teste da Camada Controller Sales', () => {
  afterEach(function () {
    sinon.restore();
  });

  it('Listar todos os Sales', async function () {
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(saleService, 'returnAllSales')
      .resolves(allSalesMock)
    await saleController.getAllSales(req, res);
    expect(res.status.calledWith(200));
    expect(res.json.calledWith(allSalesMock));
  });
})