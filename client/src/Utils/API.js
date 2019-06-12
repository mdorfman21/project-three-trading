import axios from "axios";

export default {
  getStockInfo: function(stockQuery) {
    return axios.post(`/prices/${stockQuery.symbol}`, stockQuery);
  }
};
