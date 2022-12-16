const sinon = require('sinon');
const { expect } = require('chai');

const saleModel = require('../../../src/models/sales.model');
const saleService = require('../../../src/services/sales.service');
const { allSalesMock, saleIdMock } = require('../mocks/sale.mock');

describe('Teste da Camada Service', () => {
  afterEach(function () {
    sinon.restore();
  });

  it('Listar todos os Sales', async function () {

    sinon.stub(saleModel, 'getAllSales').resolves(allSalesMock);
    const result = await saleService.returnAllSales();
    expect(result).to.deep.equal(allSalesMock);

  });

  it('Listar a Sale, se possuir sale com esse ID', async function () {

    sinon.stub(saleModel, 'getSaleById').resolves(saleIdMock);
    const result = await saleService.returnSaleByID(1);
    expect(result).to.deep.equal(saleIdMock);
  });
});