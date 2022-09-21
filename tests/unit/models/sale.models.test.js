const sinon = require('sinon');
const { expect } = require('chai');

const salesModel = require('../../../src/models/sales.model');
const connect = require('../../../src/models/connection');
const { allSalesMock } = require('../mocks/sale.mock');

describe('Teste da camada Model', () => {
  afterEach(function () {
    sinon.restore();
  });

  it('Listar todos os Sales', async function () {

    sinon.stub(connect, 'execute').resolves([allSalesMock]);
    const result = await salesModel.getAllSales();
    expect(result).to.deep.equal(allSalesMock);

  });
});