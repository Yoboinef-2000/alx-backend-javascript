const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM, totalAmount, and totalShipping', () => {
    // Create a spy on Utils.calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Check if calculateNumber was called once with correct arguments
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the original method
    spy.restore();
  });
});
