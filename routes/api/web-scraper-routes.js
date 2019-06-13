const router = require("express").Router();
const webScraperController = require("../../controllers/api_controllers");

router.route("/scrape/:symbol").get(webScraperController.getStockNews);

module.exports = router;
