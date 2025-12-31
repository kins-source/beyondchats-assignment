const express = require("express");
const router = express.Router();
const controller = require("../controllers/articleController");

router.get("/scrape", controller.scrapeArticles);
router.get("/", controller.getArticles);

module.exports = router;
