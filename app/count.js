exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    const countTimer = setInterval(startTimer, 100);
    let num = start;

    function cancel() {
      clearInterval(countTimer);
    };

    function startTimer() {
      console.log(num);
      (num === end) && cancel() || num++;
    }

    startTimer();
    return { cancel };
  }
};
