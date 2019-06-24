const router = require("express").Router();
const stockController = require("../../controllers/api_controllers");

router
  .route("/prices/:symbol")
  .get((req, res) => {
    console.log(res);
  })
  .post(stockController.getStockInfo);

router.route("/given/pairs").get(stockController.getGivenPairs);

module.exports = router;
