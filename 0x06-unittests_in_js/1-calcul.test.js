const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('should return the sum of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return the difference of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return the division of two rounded numbers', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return "Error" when dividing by zero', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should handle negative numbers correctly for SUM', function() {
    assert.strictEqual(calculateNumber('SUM', -1.4, -4.6), -6);
  });

  it('should handle negative numbers correctly for SUBTRACT', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.6), 4);
  });

  it('should handle negative numbers correctly for DIVIDE', function() {
    assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.6), 0.2);
  });

  it('should throw an error for invalid type', function() {
    assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), /Invalid operation type/);
  });
});
