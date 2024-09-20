const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
    // assert.strictEqual(calculateNumber(-1.5, -3.5), -5);
  });

  it('should handle cases where both numbers round up', () => {
    assert.strictEqual(calculateNumber(1.6, 2.8), 5);
  });

  it('should handle cases where one number rounds down', () => {
    assert.strictEqual(calculateNumber(1.4, 2.8), 4);
  });

  it('should handle cases with zero', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 4.5), 5);
    assert.strictEqual(calculateNumber(4.5, 0), 5);
  });
});
