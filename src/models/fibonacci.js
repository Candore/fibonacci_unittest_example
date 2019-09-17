const functions = {
  getNextNumber: function (i, fibArray) {
    let fibnum = fibArray[i - 1] + fibArray[i - 2];
    return fibnum;
  },
  getFibArray: function(n) {
    let fibArray = [];
    fibArray[0] = 0;
    fibArray[1] = 1;
    for (let i = 2; i < n; i++) {
      fibArray[i] = this.getNextNumber(i, fibArray);
    }
    return fibArray;
  },
  getFibSequence: function(n) {
    var fibArray = this.getFibArray(n);
    return fibArray.join(" ");
  }
};

module.exports = functions