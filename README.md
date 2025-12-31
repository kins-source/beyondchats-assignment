# 📘 BeyondChats Assignment – Full Stack Web Application
“I built a full-stack application where articles are scraped from BeyondChats, enhanced using an AI model with Google-based references, and displayed through a React frontend. The system supports on-demand scraping, clean API separation, and graceful error handling.”




## 🚀 Overview

This project is a **full-stack web application** built as part of the BeyondChats assignment.
It demonstrates **web scraping**, **AI-based content rewriting**, and a **React frontend** to display results.

The application scrapes blog articles from BeyondChats, enhances them using an AI model with Google-based references, and displays both the original and updated content in a clean UI.

---

## 🧩 Project Structure

```
beyondchats/
│
├── backend/
│   ├── controllers/
│   │   └── articleController.js
│   ├── routes/
│   │   └── articleRoutes.js
│   ├── services/
│   │   ├── scraper.js
│   │   └── googleSearch.js
│   ├── scripts/
│   │   ├── rewriteArticles.js
│   │   └── aiRewrite.js
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   └── App.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* Axios
* Cheerio (for scraping)
* SerpAPI (Google search)
* Groq LLM (AI rewriting)
* dotenv

### Frontend

* React (Create React App)
* Fetch API
* Inline CSS styling

### Tools

* Git & GitHub
* VS Code
* PowerShell

---

## 🔄 Application Workflow

### Phase 1 – Web Scraping

* Scrapes blog titles and content from BeyondChats.
* Stores scraped data in memory (no database used).
* API Endpoint:

  ```
  GET /articles/scrape
  ```

---

### Phase 2 – AI Content Rewriting

* Uses Google search results (SerpAPI) to gather references.
* Uses an AI model to rewrite the original article.
* Adds reference links for transparency.
* Includes error handling for missing or invalid references.

---

### Phase 3 – Frontend UI

* React frontend to display articles.
* Button to trigger scraping on demand.
* Displays:

  * Article title
  * Original content
  * AI-updated content
  * Reference links

---

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/kins-source/beyondchats-assignment.git
cd beyondchats-assignment
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend`:

```
GROQ_API_KEY=your_groq_api_key(get groq api keys from -" https://console.groq.com ")
SERP_API_KEY=your_serp_api_key(get serp api keys from -" https://serpapi.com ")
```

Start backend server:

```bash
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🖱️ How to Use the Application

1. Open `http://localhost:3000`
2. Click **“Scrape Articles”**
3. Articles will load automatically
4. View:

   * Original article content
   * AI-enhanced content
   * Reference links

---

## ⚠️ Design Decisions & Notes

* No database is used (in-memory storage) for simplicity.
* Google snippets are used as references instead of scraping full third-party pages.
* Article content is truncated in the UI for readability and performance.
* Error handling is implemented to prevent crashes when references are unavailable.

---

## 🎯 Assignment Completion Status

| Phase                    | Status      |
| ------------------------ | ----------- |
| Phase 1 – Scraping       | ✅ Completed |
| Phase 2 – AI Enhancement | ✅ Completed |
| Phase 3 – Frontend       | ✅ Completed |

---

## 🧠 Future Improvements (Optional)

* Add database (MongoDB / PostgreSQL)
* Add pagination & search
* Store rewritten articles permanently
* Improve UI styling
* Add loading spinners

---

## 👤 Author

**Nikhil Dattatray Patil**
Full Stack Developer (Internship Assignment)

---

## ✅ Final Note

This project demonstrates:

* Full-stack development
* API design
* AI integration
* Frontend-backend communication
* Clean Git workflow

Thank you for reviewing 🙏

---


