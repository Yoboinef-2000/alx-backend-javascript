const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(function () {
    // Set up the spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore console.log after each test
    consoleSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', function () {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    // Verify that console.log was called exactly once
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', function () {
    // Call the function
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;

    // Verify that console.log was called exactly once
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
