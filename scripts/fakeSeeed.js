// const API = require("../client/src/Utils/correlation_function");
const _ = require("lodash");
const givenPairs = require("../models/givenPairs");
const givenPairsData = require("../models/givenPairsData");

const moment = require("moment");
moment().format();
const mongoose = require("mongoose");

const MONGOD_URI = process.env.MONGOD_URI || "mongodb://localhost/pairs";
mongoose.connect(MONGOD_URI, {
  useNewUrlParser: true
});

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
    //   console.log("firststock mean:", xMean);
    //   console.log("secondstock mean:", yMean);
    //   console.log("numerator:", numerator);
    //   console.log("denominator:", denominator);
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
    //   console.log("first stock denominator:", xDenominator);
    //   console.log("second stock denominator:", yDenominator);
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

givenPairsData.find().then(dbStock => {
  const testArray = dbStock.map(obj => {
    const stats = obj.stats.map(day => {
      return day.dayClose;
    });
    return { symbol: obj.symbol, stats: stats };
  });

  testArray.slice(2, 2).forEach(stock => {
    console.log(stock.stats.length);
    if (stock.stats.length > 0) {
      testArray.forEach(otherStock => {
        console.log(
          "[DEBUG] computing correlation for ",
          stock.symbol,
          otherStock.symbol
        );
        if (otherStock.stats.length > 0) {
          let correlation = correlationObject.correlate(
            stock.stats,
            otherStock.stats
          );
          console.log("[DEBUG] about to create a given pair", correlation);
          givenPairs.create(
            {
              symbolGroup: [stock.symbol, otherStock.symbol],
              correlations: correlation
            },
            function(err, res) {
              console.log("err: " + err);
              console.log(res, "completed");
            }
          );
        }
      });
    }
  });
});
