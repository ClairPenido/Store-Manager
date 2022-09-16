const sinon = require('sinon');
const chai = require('chai');
const { expect } = require('chai');

const productController = require('../../../src/controllers/products.controller');
const productService = require('../../../src/services/products.service');
const { productByIdMock } = require('../mocks/product.mock');

const req = {params: {id: 1}};
const res = {};
res.status = sinon.stub().returns(res);
res.json = sinon.stub().returns();

describe('Teste da Camada Controller', () => {
  afterEach(function () {
    sinon.restore(); 
  });

  it('Listar Produtos pelo ID, se possuir produto com esse ID', async function () {
    sinon.stub(productService, 'returnProductByID') //qual camada e qual "função" irei simular
      .resolves(productByIdMock);
    await productController.getProductsByID(req, res);
    expect(res.status.calledWith(200));
    expect(res.json.calledWith(productByIdMock));

  });
});