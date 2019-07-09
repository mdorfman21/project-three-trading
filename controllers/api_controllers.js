const moment = require("moment");
const stockSymbol = require("../models/stockSymbol");
moment().format();
const cheerio = require("cheerio");
const axios = require("axios");
const stockInfo = require("../models/StockInfo");
const givenPairs = require("../models/givenPairs");

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
            res.status(500).json(err);
          });
        console.log(statsArray);
      });
  },

  getStockNews: function(req, res) {
    const symbol = req.params.symbol;
    const urlRequest = `https://finance.yahoo.com/quote/${symbol}/news?p=${symbol}`;
    axios.get(urlRequest).then(response => {
      const $ = cheerio.load(response.data);

      $(".js-stream-content").each((i, element) => {
        console.log(element);
      });
    });
  },

  getStockStats: function(req, res) {
    const symbol = req.params.symbol;
    const urlRequest = `https://finance.yahoo.com/quote/${symbol}/key-statistics?p=${symbol}`;

    axios.get(urlRequest).then(response => {
      const $ = cheerio.load(response.data);
      // console.log($.html());

      var dataObject = {};
      var datas = [];
      $("td").each((i, element) => {
        if ($(element).hasClass("Ta(end)")) {
          dataObject.value = $(element).text();
          datas.push(dataObject);
          dataObject = {};
        } else {
          dataObject.name = $(element).text();
        }
      });
      console.log(datas);
      stockInfo
        .findOneAndUpdate(
          { symbol },
          { symbol, stats: datas },
          { upsert: true }
        )
        .then(function(dbStock) {
          res.json(dbStock);
        });
    });
  },

  getGivenPairs: function(req, res) {
    givenPairs.find({ correlations: { $gt: 0.95, $lt: 1 } }).then(dbStock => {
      console.log(dbStock);
      res.json(dbStock);
    });
  }
};
