import axios from "axios";

export default {
  getStockInfo: function(stockQuery) {
    return axios.post(`/prices/${stockQuery.symbol}`, stockQuery);
  },

  getStockNews: function(symbol) {
    return axios.get(`/scrape/${symbol}`);
  },

  getStockStats: function(symbol) {
    return axios.get(`/info/${symbol}`);
  },

  getGivenPairs: function() {
    return axios.get("/given/pairs");
  }
};
