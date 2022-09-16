const sinon = require('sinon');
const chai = require('chai');
const { expect } = require('chai');

const productModel = require('../../../src/models/products.model');
const { allProductsMock, productByIdMock } = require('../mocks/product.mock');

describe('Teste da Camada Service', () => {
  afterEach(function () {
    sinon.restore();
  });

  it('Listar todos os Produtos', async function () { //tive a percepção que fazer esse teste não aumentou em nada

    sinon.stub(productModel, 'getAllProducts').resolves(allProductsMock);
    const result = await productModel.getAllProducts();
    expect(result).to.deep.equal(allProductsMock);

  });

  it('Listar Produtos pelo ID, se possuir produto com esse ID', async function () {

    sinon.stub(productModel, 'getProductsByID').resolves(productByIdMock);
    const result = await productModel.getProductsByID(3);
    expect(result).to.equal(productByIdMock);

  });
});