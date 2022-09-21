const sinon = require('sinon');
const { expect } = require('chai');
const { allSalesMock, saleIdMock } = require('../mocks/sale.mock');

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

  it('Listar todos os Sales, se possuir sale com esse ID', async function () {
    const req = {params: {id: 1}};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(saleService, 'returnSaleByID')
      .resolves(saleIdMock)
    await saleController.getSalesById(req, res);
    expect(res.status.calledWith(200));
    expect(res.json.calledWith(saleIdMock));
  });

  it('Não listar um sale, se não existir sale com o', async function () {
    const req = { params: { id: 10 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(saleService, 'returnSaleByID')
      .resolves([])
    await saleController.getSalesById(req, res);
    expect(res.status.calledWith(404));
    expect(res.json.calledWith({ message: 'Sale not found' }));
  });
})