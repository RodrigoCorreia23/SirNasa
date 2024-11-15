
# **Project: NASA-Related Resource Search**

## **Project Description**
This project is a web application that allows users to search and explore different types of space-related content. The system uses public APIs to fetch images, videos, and scientific articles related to user-provided search terms.

The application also offers a user-friendly and interactive interface, with dedicated pages for viewing images, videos, and articles.

---

## **Features**
- **NASA Image Search**: Fetches and displays images based on keywords provided by users.
- **YouTube Video Search**: Displays space-related videos using the YouTube API.
- **Scientific Articles**: Allows users to search for articles related to topics of interest via the News API.
- **Interactive Interface**: Smooth navigation between sections with organized result views.

---

## **Technologies Used**
- **Front-End**:
  - HTML5, CSS3, JavaScript.
- **Back-End**:
  - Node.js with Express.js.
- **External APIs**:
  - NASA Image API.
  - YouTube API.
  - News API.
- **Dependency Management**:
  - npm.
- **Others**:
  - dotenv for environment variable management.
  - axios for HTTP requests.

---

## **How to Run the Project**

### **Prerequisites**
- Node.js and npm installed on your machine.
- Clone the repository or copy the project files to your local system.

### **Installation**

1. Clone the project
   ```bash
   https://github.com/RodrigoCorreia23/SirNasa
   ```

2. Install project dependencies by running:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add the following environment variables with your respective API keys:
   ```
   NASA_API_KEY=<your-nasa-api-key>
   YOUTUBE_API_KEY=<your-youtube-api-key>
   NOTICIAS_API_KEY=<your-news-api-key>
   ```

### **Execution**
1. Start the server with the command:
   ```bash
   npm start
   ```
2. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

---

## **Project Structure**
```
.
├── public
│   ├── artigos.html
│   ├── index.html
│   ├── videos.html
│   ├── styles.css
│   ├── artigos.js
│   ├── script.js
│   └── videos.js
├── .env
├── server.js
├── package.json
└── README.md
```

---

## **Endpoints**

### **Internal APIs**
1. `/api/nasa/search`: Fetches NASA images based on the provided term.

   - **Parameters**:

     - `q`: Search keyword.

     - `limit` (optional): Maximum number of results (default: 20).

2. `/api/youtube/search`: Searches for related videos on YouTube.

   - **Parameters**:

     - `q`: Search keyword.

     - `limit` (optional): Maximum number of videos (default: 10).

3. `/api/news/search`: Fetches scientific articles via the News API.

   - **Parameters**:

     - `q`: Search keyword.

---

## **Key Files**

- **server.js**: Server configuration, including routes and API integrations.

- **index.html**: Main page with the search form.

- **artigos.html and artigos.js**: Displays related articles.

- **videos.html and videos.js**: Displays related videos.

---

---
# Warning

Searches must be done in English, and sometimes with NASA at the end (Galaxy Nasa), as this example, if it is without NASA in video searches, irrelevant subjects will appear.

---

---
## Render

```bash
https://sirnasa.onrender.com/
```
---

---
## authors

- Rodrigo Correia - 28968
- Ana Silva - 29035
---