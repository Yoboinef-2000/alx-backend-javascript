const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the Express app

describe('Index page', () => {
  it('should return correct status code and message', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return correct status code for valid cart ID', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 for invalid cart ID', (done) => {
    request.get('http://localhost:7865/cart/invalid', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments', () => {
  it('should return correct payment methods object', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      const expectedBody = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedBody);
      done();
    });
  });
});

describe('Login page', () => {
  it('should welcome the user with their username', (done) => {
    const postData = { userName: 'Betty' };
    request.post({
      url: 'http://localhost:7865/login',
      json: postData,
      headers: { 'Content-Type': 'application/json' }
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return 400 if no userName is provided', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: {},
      headers: { 'Content-Type': 'application/json' }
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(body).to.equal('Missing userName');
      done();
    });
  });
});
