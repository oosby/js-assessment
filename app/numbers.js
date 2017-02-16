exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & num >> (bit - 1);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let result =  `${num.toString(2)}`;
    let diff = 8 - result.length;

    while (diff--) {
      result = (0 + result);
    }

    return result;
  },

  multiply: function(a, b) {
    const decimalPlaces = `${b}`.split('.')[1].length;
    return +(a * b).toFixed(decimalPlaces);
  }
};
