const router = require("express").Router();
const stockRoutes = require("./stocks");

router.use("", stockRoutes);

module.exports = router;
