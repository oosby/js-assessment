exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    return str.split('').reduce(function(prev, cur, idx, arr) {
      const backOne = prev.charAt(prev.length - 1);
      const backAmt = prev.charAt(prev.length - amount);

      // first rount
      if (idx === 0) { return prev + cur; }

      // haven't maxxed out on the letter yet ||
      // current letter is different
      if ((backOne === cur && backAmt !== cur) || backOne !== cur) {
          return prev + cur;
      }

      // maxxed out
      if (backOne === cur && backAmt === cur) {
          return prev;
      }

      return prev;
    });
  },

  wordWrap: function(str, cols) {
    let ret = '';
    str.split(' ').forEach( (a, i, ar) => {
      if (i > 0) {
        if ((a.length + ret.length) < cols) {
          ret += ` ${a}`;
        } else {
          ret += `\n${a}`;
        }
      } else {
        ret += `${a}`;
      }
    });
    return ret;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
