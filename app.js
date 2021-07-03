const express = require("express");
const app = express();
const port = 8000;

const ejs = require("ejs");

// import page
const BookTest1 = require("./page/BookTest1.html");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/books-sendfile", (req, res) => {
  res.sendFile("./page/BookTest1.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
