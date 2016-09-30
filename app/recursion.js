exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    const ret = [];

    function recurse(curData) {
      if (Array.isArray(curData)) {
        curData.forEach(val => {
          (typeof(val) === 'string') && ret.push(val) || recurse(val);
        });
      } else if (curData instanceof Object) {
        Object.keys(curData).forEach(key => {
          (key === 'files') && recurse(curData[key]);
        });
      }
    }

    function subdir(curData) {
      if (Array.isArray(curData)) {
        curData.forEach(val => {
          (typeof(val) !== 'string') && subdir(val);
        });
      } else if (curData instanceof Object) {
        Object.keys(curData).forEach(key => {
          (curData[key] === dirName) && recurse(curData.files) || (key === 'files') && subdir(curData[key]);
        });
      }
    }

    (!dirName) && recurse(data) || subdir(data)
    
    return ret;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
