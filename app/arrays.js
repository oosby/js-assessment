exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((prev, cur) => prev + cur );
  },

  remove: function(arr, item) {
    return arr.filter(a => a !== item);
  },

  removeWithoutCopy: function(arr, item) {
    arr.sort().splice(arr.indexOf(item), (arr.lastIndexOf(item) - arr.indexOf(item))+1 );
      return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    arr.sort();
    return (arr.lastIndexOf(item) - arr.indexOf(item)) + 1;
  },

  duplicates: function(arr) {
    const dupes = arr.filter(a => {
      if (arr.indexOf(a) !== arr.lastIndexOf(a)) {
        return a;
      }
    })

    return [... new Set(dupes)];
  },

  square: function(arr) {
    return arr.map(a => a * a );  
  },

  findAllOccurrences: function(arr, target) {
    const ret = [];

    arr.forEach((a, i) => {
      (a === target) && ret.push(i)
    });

    return ret;
  }
};
