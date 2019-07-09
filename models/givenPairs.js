const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let symbolGroupSchema = new Schema({
  symbolGroup: Array,
  correlations: Number
});

let givenPairs = mongoose.model("givenPairs", symbolGroupSchema);

module.exports = givenPairs;
