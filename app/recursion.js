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
    // Heap's algo
    var result = [];

    function swap(a, b, arr) {
      const ioa = arr.indexOf(a);
      const iob = arr.indexOf(b);
      arr[ioa] = b;
      arr[iob] = a;
    }

    function gen(len) {
      if (len === 1) {
        result.push(arr.concat());
      } else {
        const l = len - 1;
        const even = len%2 === 0;

        for(let i = 0; i < len; i++) {
          gen(l);
          swap((even) ? arr[i] : arr[0], arr[l], arr);
        }
      }
    }

    gen(arr.length);
    return result;
  },

  fibonacci: function(n) {
    function * fiboGen(max) {
      let i = 0;
      let prev = 0;
      let prevprev = 0;
      let res;
      while (i < max) {
        if (i < 2) {
          prev = 1;
          yield i;
        }

        res = prev + prevprev;
        yield res;
        prevprev = prev;
        prev = res;
        i++;
      }
    }
    const it = fiboGen(n);
    let i = 0;
    let result;
    while (i <= n) {
      result = it.next();
      i++;
    }
    return result.value;
  },

  validParentheses: function(n) {
    console.log(n)
    
    // return result;
  }
};
