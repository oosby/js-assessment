exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr)
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return arg => `${str}, ${arg}`;
  },

  makeClosures: function(arr, fn) {
    return arr.map(a => fn.bind(null, a) );
  },

  partial: function(fn, str1, str2) {
    const args = [...arguments].slice(1);

    if (args.length === fn.length) {
      return fn.apply(this, args);
    } else {
      return function(str3) {
        args.push(str3);
        if (args.length === fn.length) {
          return fn.apply(this, args);
        }
      }
    }
  },

  useArguments: function() {
    return [...arguments].reduce((prev, cur) => prev + cur);
  },

  callIt: function(fn) {
    const args = [...arguments].slice(1);
    fn.apply(this, args);
  },

  partialUsingArguments: function(fn) {
    let args = [...arguments].slice(1);

    return function() {
      args = args.concat([...arguments]);
      if (args.length === fn.length) {
        return fn.apply(this, args);
      }
    }
  },

  curryIt: function(fn) {
    let args = [...arguments].slice(1);
    const func = fn;

    function curried(cargs) {
      args = args.concat(cargs);
      if (args.length === fn.length) {
        return fn.apply(this, args);
      } else {
        return curried;
      }
    }

    return curried;
  }
};
