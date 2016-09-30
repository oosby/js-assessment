exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj)
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    const ret = [];
    for(let o in obj) {
      obj.hasOwnProperty(o) && ret.push(`${o}: ${obj[o]}`)
    }

    return ret;
  }
};
