const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const symbolSchema = new Schema({
  symbol: String,
  stats: Array
});

const stockInfo = mongoose.model("stockInfo", symbolSchema);

module.exports = stockInfo;
