const correlationObject = {
  correlate: function(firstStock, secondStock) {
    //the price histories are going to be in an array
    let xHistory = firstStock;
    let yHistory = secondStock;
    let xMean = xHistory.reduce(this.getSum) / xHistory.length;
    let yMean = yHistory.reduce(this.getSum) / yHistory.length;

    const numerator = this.calcNumerator(xHistory, yHistory, xMean, yMean);
    const denominator = this.calcDenominator(xHistory, yHistory, xMean, yMean);
    const coefficient = numerator / denominator;
    console.log("firststock mean:", xMean);
    console.log("secondstock mean:", yMean);
    console.log("numerator:", numerator);
    console.log("denominator:", denominator);
    return coefficient;
  },

  getSum: function(acc, val) {
    return acc + val;
  },

  calcNumerator: function(xHistory, yHistory, xMean, yMean) {
    let sumCount = 0;
    xHistory.forEach((price, index) => {
      sumCount += (price - xMean) * (yHistory[index] - yMean);
    });
    return sumCount;
  },

  calcDenominator: function(xHistory, yHistory, xMean, yMean) {
    const xDenominator = this.calcSquare(xHistory, xMean);
    const yDenominator = this.calcSquare(yHistory, yMean);
    console.log("first stock denominator:", xDenominator);
    console.log("second stock denominator:", yDenominator);
    const trueDenominator = Math.pow(xDenominator * yDenominator, 0.5);
    return trueDenominator;
  },

  calcSquare: function(history, mean) {
    let square = 0;
    history.forEach(price => {
      square += Math.pow(price - mean, 2);
    });
    return square;
  }
};

export default correlationObject;
