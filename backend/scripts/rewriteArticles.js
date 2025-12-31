require("dotenv").config();
const axios = require("axios");

const searchGoogle = require("../services/googleSearch");
const rewriteArticle = require("../services/aiRewrite");

(async () => {
  try {
    const res = await axios.get("http://localhost:5000/articles");
    const articles = res.data;

    for (const article of articles) {
      console.log("\n🔹 Processing:", article.title);

      const refs = await searchGoogle(article.title);

      if (!refs || refs.length === 0) {
        console.log("⚠️ No references found, skipping");
        continue;
      }

      const ref1 = refs[0]?.snippet || "";
      const ref2 = refs[1]?.snippet || "";

      const updated = await rewriteArticle(
        article.originalContent,
        ref1,
        ref2
      );

      console.log("\n✅ UPDATED ARTICLE:\n", updated);
      console.log("\n📌 REFERENCES:");
      refs.forEach(r => console.log(r.link));
    }

  } catch (err) {
    console.error("❌ Phase 2 FULL ERROR:", err);
  }
})();
