exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    // 'aaxxxaabbbb'
    console.log('%cstr %o', 'color:teal', str, amount);

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
