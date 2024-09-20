const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return a successful response when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to signal that the test is complete
      })
      .catch(err => {
        done(err); // Call done with the error if the promise is rejected
      });
  });

  it('should resolve to undefined when success is false', function (done) {
    getPaymentTokenFromAPI(false)
      .then(response => {
        expect(response).to.be.undefined; // Expect response to be undefined
        done(); // Call done to signal that the test is complete
      })
      .catch(err => {
        done(err); // Call done with the error if the promise is rejected
      });
  });
});
