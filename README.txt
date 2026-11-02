PORTFOLIO WEBSITE — MONGODB + NODE.JS + EXPRESS + EJS

This project converts the three pages from the uploaded portfolio into dynamic EJS pages:
- Home: name, tagline and background video
- About: heading, paragraphs and photograph
- Contact: phone, email and background image

Original CSS and media assets are retained in public/css and public/images.

FOLDER STRUCTURE
portfolio/
  app.js
  seed.js
  package.json
  .env (create this from .env.example)
  models/Portfolio.js
  views/index.ejs
  views/about.ejs
  views/contact.ejs
  public/css/style.css
  public/images/about.jpeg
  public/images/contact.png
  public/images/home.mp4

SETUP
1. Extract this ZIP.
2. Open the extracted folder in VS Code.
3. Make sure MongoDB is running locally, or use a MongoDB Atlas URI.
4. Copy .env.example to .env.
5. Set MONGODB_URI in .env.
6. Run:
      npm install
7. Insert the sample portfolio data:
      npm run seed
8. Start the server:
      npm start
9. Open:
      http://localhost:3000
      http://localhost:3000/about
      http://localhost:3000/contact

DATABASE
Database name: portfolio_db
Collection name: portfolios (created automatically by Mongoose)

SEED BEHAVIOUR
The seed script inserts one portfolio document. If a document already exists,
it skips insertion to avoid duplicates. To change the displayed content later,
edit the document in MongoDB.

NOTES
- Keep the .env file private; do not commit it to GitHub.
- The original portfolio's content and assets are preserved.
- The existing stylesheet uses the original class names and design.
- This is a display-only portfolio; no admin editing dashboard is included.
