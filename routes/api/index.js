const router = require("express").Router();
const stockRoutes = require("./stocks");
const webScraperRoutes = require("./web-scraper-routes");

router.use("", stockRoutes);
router.use("", webScraperRoutes);

module.exports = router;
