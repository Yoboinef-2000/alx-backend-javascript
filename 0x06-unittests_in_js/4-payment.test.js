const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(function () {
    // Spy on console.log to track calls
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the original console.log function after each test
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20, and log correct message', function () {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify that Utils.calculateNumber was called with the correct arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore the stubbed function to its original behavior
    calculateNumberStub.restore();
  });
});
