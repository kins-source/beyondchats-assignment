const axios = require("axios");

async function searchGoogle(query) {
  const response = await axios.get("https://serpapi.com/search", {
    params: {
      q: query,
      api_key: process.env.SERP_API_KEY,
      num: 2
    }
  });

  return response.data.organic_results.slice(0, 2).map(r => ({
    title: r.title,
    link: r.link,
    snippet: r.snippet || ""
  }));
}

module.exports = searchGoogle;
