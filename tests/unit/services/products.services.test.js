const sinon = require('sinon');
const chai = require('chai');
const { expect } = require('chai');

const productService = require('../../../src/services/products.service');
const productModel = require('../../../src/models/products.model');
const { insertNameMock, insertNameIDMock, allProductsMock, productByIdMock } = require('../mocks/product.mock')

describe('Teste da Camada Service', () => {
  afterEach(function () {
    sinon.restore();
  });

  it('Listar Produtos pelo ID', async function () {

    sinon.stub(productModel, 'getInsertProduct').resolves(productByIdMock);
    const result = await productModel.getAllProducts();
    expect(result).to.equal(allProductsMock);

  });
});