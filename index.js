const express = require('express');
const app = express();
const mongoose = require('mongoose');
// The collections
const Article = require('./models/Article');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to get data from form as JSON
app.use(express.static('public'));
// Connect to db
mongoose.connect('mongodb+srv://<username>:<password>@article-nodejs.c9vr3wf.mongodb.net/?retryWrites=true&w=majority&appName=article-nodejs').then(
  ()=> console.log("connected")
).catch(
  ()=> console.log('failed to connect')
)

// Start endpoints
/* ** Rendering Pages ** */
// render the home page
app.get("/", async (req, res) => {
  const articles = await Article.find();
  res.render('home.ejs', { articles });
});
// render addPage
app.get("/articles/new", (req, res) => {
  res.render('new-article.ejs');
});
// render the article page
app.get("/articles/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render('article.ejs', { article });
});
// render the edit page
app.get("/articles/:id/edit", async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render('edit-article.ejs', { article });
});

/* ** Actions url ** */
// adding new articles
app.post("/articles/new", async (req, res)=>{
  const newArticle = new Article();
  newArticle.title = req.body.title;
  newArticle.author = req.body.author;
  newArticle.body = req.body.body;
  await newArticle.save();
  res.redirect('/');
})
// updating article
app.post("/articles/:id", async (req, res)=>{
  await Article.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/articles/${req.params.id}`);
});
// Deleting Page
app.post("/articles/del/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

// End endpoints


app.listen(3000, // Port
  ()=> console.log("I am listening in port 3000")
) 