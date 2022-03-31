'use strict';

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('getProductsById', '/handler.js', 'getProductsById');

describe('getProductsById', () => {
  before((done) => {
    done();
  });
  
  it('should return 200 when correct ID is provided', async () => {
    const response = await wrapped.run({
      pathParameters: {
        id: "62459f6a26817471c79cf4ce"
      }
    });
    expect(response).to.not.be.empty;
    expect(response.body).to.not.be.empty;
    expect(response.statusCode).to.be.eql(200);
  });

  it('should return 500 when incorrect ID is provided', async () => {
    const response = await wrapped.run({
      pathParameters: {
        id: "62459f6a26817471c79cf4c"
      }
    });
    expect(response).to.not.be.empty;
    expect(response.body).to.not.be.empty;
    expect(response.statusCode).to.be.eql(500);
  });
});
