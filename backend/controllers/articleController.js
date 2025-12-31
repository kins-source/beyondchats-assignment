const scrapeBeyondChats = require("../services/scraper");

let articles = []; // temporary storage (memory)

exports.scrapeArticles = async (req, res) => {
  articles = await scrapeBeyondChats();
  res.json({
    message: "Articles scraped successfully",
    data: articles
  });
};

exports.getArticles = (req, res) => {
  res.json(articles);
};
