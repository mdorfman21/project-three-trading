const router = require("express").Router();
const webScraperController = require("../../controllers/api_controllers");

router.route("/scrape/:symbol").get(webScraperController.getStockNews);

router.route("/info/:symbol").get(webScraperController.getStockStats);

module.exports = router;
