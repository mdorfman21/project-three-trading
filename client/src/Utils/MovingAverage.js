import Correlate from "./correlation_function";
import _ from "lodash";

export default {
  arrayOfTen: function(array, index) {
    if (index <= 19) {
      return 0;
    } else {
      const arrayOfTen = [
        array[index - 19],
        array[index - 18],
        array[index - 17],
        array[index - 16],
        array[index - 15],
        array[index - 14],
        array[index - 13],
        array[index - 12],
        array[index - 11],
        array[index - 10],
        array[index - 9],
        array[index - 8],
        array[index - 7],
        array[index - 6],
        array[index - 5],
        array[index - 4],
        array[index - 3],
        array[index - 2],
        array[index - 1],
        array[index]
      ];
      const numberToReturn = arrayOfTen.reduce(Correlate.getSum) / 20;
      return numberToReturn;
    }
  },

  getTheArray: function(array, index) {
    if (index <= 19) {
      return 0;
    } else {
      const arrayOfTen = [
        array[index - 19],
        array[index - 18],
        array[index - 17],
        array[index - 16],
        array[index - 15],
        array[index - 14],
        array[index - 13],
        array[index - 12],
        array[index - 11],
        array[index - 10],
        array[index - 9],
        array[index - 8],
        array[index - 7],
        array[index - 6],
        array[index - 5],
        array[index - 4],
        array[index - 3],
        array[index - 2],
        array[index - 1],
        array[index]
      ];
      const mean = arrayOfTen.reduce(Correlate.getSum) / 20;
      console.log("mean:", mean);
      const standardDeviationArray = arrayOfTen.map(price => {
        return Math.pow(price - mean, 2);
      });

      console.log("sigma array:", standardDeviationArray);
      const standardDeviation =
        standardDeviationArray.reduce(Correlate.getSum) / 20;
      console.log("sigma:", standardDeviation);
      return standardDeviation;
    }
  }
};
