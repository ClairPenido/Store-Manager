const sinon = require('sinon');
const { expect } = require('chai');

const productModel = require('../../../src/models/products.model');
const connect = require('../../../src/models/connection');
const { insertNameMock, insertNameIDMock, allProductsMock, productByIdMock } = require('../mocks/product.mock')

describe('Teste da camada Model', () => {
  afterEach(function () {
    sinon.restore();
  }); 

  it('Listar todos os Produtos', async function () {

    sinon.stub(connect, 'execute').resolves(allProductsMock);
    const result = await productModel.getAllProducts();
    expect(result).to.equal(allProductsMock);

  });

  it('Listar um Produto de acordo com seu ID', async function () {

    sinon.stub(connect, 'execute').resolves([ productByIdMock ]);
    const result = await productModel.getProductsByID(3);
    expect(result).to.equal(productByIdMock);

  });

  it('Criar um novo Produto', async function () {

    sinon.stub(connect, 'execute').resolves({ insertId: 12 });
    const result = await productModel.getInsertProduct(insertNameMock);
    expect(result).to.equal(insertNameIDMock);

  });
});