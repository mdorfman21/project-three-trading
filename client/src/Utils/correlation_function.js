const correlationObject = function() {
  const correlate = function(firstStock, secondStock) {
    //the price histories are going to be in an array
    let xHistory = firstStock.priceHistory;
    let yHistory = secondStock.priceHistory;
    let xMean = xHistory.reduce(getSum) / xHistory.length;
    let yMean = yHistory.reduce(getSum) / yHistory.length;

    const numerator = calcNumerator(xHistory, yHistory, xMean, yMean);
    const denominator = calcDenominator(xHistory, yHistory, xMean, yMean);
    const coefficient = numerator / denominator;
    return coefficient;
  };

  let getSum = function(acc, val) {
    return acc + val;
  };

  const calcNumerator = function(xHistory, yHistory, xMean, yMean) {
    let sumCount = 0;
    xHistory.forEach((price, index) => {
      sumCount += (price - xMean) * (yHistory[index] - yMean);
    });
    return sumCount;
  };

  const calcDenominator = function(xHistory, yHistory, xMean, yMean) {
    const xDenominator = calcSquare(xHistory, xMean);
    const yDenominator = calcSquare(yHistory, yMean);
    const trueDenominator = Math.pow(xDenominator * yDenominator, 0.5);
    return trueDenominator;
  };

  const calcSquare = function(history, mean) {
    let square = 0;
    history.forEach(price => {
      denominator += Math.pow(price - mean, 2);
    });
    return square;
  };
};

export default correlationObject;
