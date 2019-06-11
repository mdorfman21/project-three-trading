const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let symbolSchema = new Schema({
  symbol: String,
  stats: Array
});

let stockSymbol = mongoose.model("stockSymbol", symbolSchema);

module.exports = stockSymbol;