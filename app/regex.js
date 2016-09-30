exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str)
  },

  containsRepeatingLetter: function(str) {
    return /([a-z])\1/i.test(str);
  },

  endsWithVowel: function(str) {
    const lastLetter = str[str.length - 1];
    return /a|e|i|o|u/i.test(lastLetter)
  },

  captureThreeNumbers: function(str) {
    let ret = false;
    const matches = str.match(/\d{3}/);
    if (matches) {
      ret = matches[0]
    }

    return ret;
  },

  matchesPattern: function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },

  // $459,049,393.21
  // 4$3,432,034.12
  isUSD: function(str) {
    return /(^\$\d{1,3}(,\d{3})*(\.\d{2})?)$/.test(str)
    
  }
};
