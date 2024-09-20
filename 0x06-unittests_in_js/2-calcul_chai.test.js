const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  it('should return the sum of two rounded numbers', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return the difference of two rounded numbers', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return the division of two rounded numbers', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return "Error" when dividing by zero', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should handle negative numbers correctly for SUM', function() {
    expect(calculateNumber('SUM', -1.4, -4.6)).to.equal(-6);
  });

  it('should handle negative numbers correctly for SUBTRACT', function() {
    expect(calculateNumber('SUBTRACT', -1.4, -4.6)).to.equal(4);
  });

  it('should handle negative numbers correctly for DIVIDE', function() {
    expect(calculateNumber('DIVIDE', -1.4, -4.6)).to.equal(0.2);
  });

  it('should throw an error for invalid type', function() {
    expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid operation type');
  });
});
