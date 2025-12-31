import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const scrapeArticles = async () => {
    setLoading(true);

    await fetch("http://localhost:5000/articles/scrape");

    const res = await fetch("http://localhost:5000/articles");
    const data = await res.json();

    setArticles(data);
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>BeyondChats Articles</h1>

      <button
        onClick={scrapeArticles}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        🔄 Scrape Articles
      </button>

      {loading && <p>Loading articles...</p>}

      {articles.map((article, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "8px"
          }}
        >
          <h2>{article.title}</h2>

          <h4>Original Article</h4>
          <p>{article.originalContent?.slice(0, 400)}...</p>

          {article.updatedContent && (
            <>
              <h4>Updated Article (AI)</h4>
              <p>{article.updatedContent?.slice(0, 400)}...</p>
            </>
          )}

          {article.references?.length > 0 && (
            <>
              <h4>References</h4>
              <ul>
                {article.references.map((r, i) => (
                  <li key={i}>
                    <a href={r} target="_blank" rel="noreferrer">
                      {r}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
