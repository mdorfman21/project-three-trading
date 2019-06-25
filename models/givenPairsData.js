const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let symbolSchema = new Schema({
  symbol: String,
  stats: Array
});

let givenPairsData = mongoose.model("givenPairsData", symbolSchema);

module.exports = givenPairsData;
