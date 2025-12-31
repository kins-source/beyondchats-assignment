require("dotenv").config();
const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

async function rewriteArticle(original, ref1, ref2) {
  const prompt = `
Rewrite the article below.
Improve clarity, structure, and formatting.
Follow the style of the reference articles.
Add a "References" section at the end.

ORIGINAL ARTICLE:
${original}

REFERENCE ARTICLE 1:
${ref1}

REFERENCE ARTICLE 2:
${ref2}
`;

  const response = await groq.chat.completions.create({
    model: "llama3-70b-8192",
    messages: [{ role: "user", content: prompt }]
  });

  return response.choices[0].message.content;
}

module.exports = rewriteArticle;
