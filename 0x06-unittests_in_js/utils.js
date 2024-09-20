const Utils = {
  calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    // Add other types like SUBTRACT, DIVIDE if needed
  }
};

module.exports = Utils;
