const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeBeyondChats() {
  const baseUrl = "https://beyondchats.com/blogs/";
  const response = await axios.get(baseUrl);
  const $ = cheerio.load(response.data);

  const articleLinks = [];

  $("a").each((_, el) => {
    const title = $(el).text().trim();
    const link = $(el).attr("href");

    if (title.length > 25 && link && link.includes("/blogs/")) {
      articleLinks.push({ title, link });
    }
  });

  const lastFive = articleLinks.slice(-5);
  const fullArticles = [];

  for (const article of lastFive) {
    try {
      const page = await axios.get(article.link);
      const $$ = cheerio.load(page.data);

      const content = $$("article").text().trim();

      fullArticles.push({
        title: article.title,
        link: article.link,
        content
      });
    } catch (err) {
      console.log("Failed to fetch:", article.link);
    }
  }

  return fullArticles;
}

module.exports = scrapeBeyondChats;
