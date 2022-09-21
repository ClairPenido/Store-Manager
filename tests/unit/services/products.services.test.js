const sinon = require('sinon');
const { expect } = require('chai');

const productModel = require('../../../src/models/products.model');
const productService = require('../../../src/services/products.service');
const { allProductsMock, productByIdMock } = require('../mocks/product.mock');

describe('Teste da Camada Service', () => {
  afterEach(function () {
    sinon.restore();
  });

  it('Listar todos os Produtos', async function () { //tive a percepção que fazer esse teste não aumentou em nada

    sinon.stub(productModel, 'getAllProducts').resolves(allProductsMock);
    const result = await productService.returnAllProducts();
    expect(result).to.deep.equal(allProductsMock);

  });

  it('Listar Produtos pelo ID, se possuir produto com esse ID', async function () {

    sinon.stub(productModel, 'getProductsByID').resolves(productByIdMock);
    const result = await productService.returnProductByID(3);
    expect(result).to.deep.equal(productByIdMock);

  });
});