var express = require("express");
const res = require("express/lib/response");
var app = express();
const port = process.env.PORT || 5000;
var cors = require("cors");

app.use(cors());

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("Dragon is running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/categories/:id", (req, res) => {
  if (parseInt(req.params.id) === 0) res.send(news);
  else res.send(news.filter((n) => n.category_id === req.params.id));
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  res.send(news.find((n) => n._id === req.params.id));
});

app.listen(port, () => {
  console.log(`Dragon API is running on port ${port}`);
});
