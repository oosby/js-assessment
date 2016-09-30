exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    if (typeof num !== 'number') { return false; }
    let ret = num;
    const three = num % 3 === 0;
    const five = num % 5 === 0;

    if (three) {
        ret = 'fizz';
    } 
    if (five) {
        ret = 'buzz';
    }

    if (three && five) {
        ret = 'fizzbuzz'
    }

    return ret;
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

  }
};
