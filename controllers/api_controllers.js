const moment = require("moment");
const stockSymbol = require("../models/stockSymbol");
moment().format();
const cheerio = require("cheerio");
const axios = require("axios");

module.exports = {
  getStockInfo: function(req, res) {
    const Alpaca = require("@alpacahq/alpaca-trade-api");

    const alpaca = new Alpaca({
      keyID: process.env.APCA_API_KEY_ID,
      secretKey: process.env.APCA_API_SECRET_KEY,
      paper: true
    });

    const symbol = req.params.symbol;
    const days = req.body.days;
    const start = req.body.start;
    const end = req.body.end;
    alpaca
      .getBars("day", symbol, {
        limit: days,
        //start and end format = YYYY-M-D
        start: start,
        end: end
      })
      .then(barset => {
        console.log(barset);
        statsArray = [];
        barset[symbol].forEach(day => {
          stats = {};
          stats.timestamp = moment.unix(day.t).format("MM/DD/YYYY");
          stats.dayClose = day.c;
          stats.dayOpen = day.o;
          stats.volume = day.v;
          stats.dayHigh = day.h;
          stats.dayLow = day.l;
          statsArray.push(stats);
        });

        stockSymbol
          .findOneAndUpdate(
            { symbol },
            {
              symbol,
              stats: statsArray
            },
            { upsert: true }
          )
          .then(function(dbStock) {
            console.log(`${symbol} was created!`);
            res.json(dbStock);
          })
          .catch(err => {
            console.log(err);
          });
        console.log(statsArray);
      });
  },

  getStockNews: function(req, res) {
    const symbol = req.params.symbol;
    axios
      .get(`https://finance.yahoo.com/quote/${symbol}/news?p=${symbol}`)
      .then(response => {
        const $ = cheerio.load(response.data);
        $("<li>").each((i, element) => {
          console.log(element);
        });
      });
  }
};
