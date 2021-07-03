const express = require("express");
const app = express();
const port = 8000;

// use ejs
app.set("view engine", "ejs");

const mysql = require("mysql");
const myconnection = require("express-myconnection");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  port: "3306",
  database: "jn_tokojon",
};

app.use(myconnection(mysql, dbConfig, "pool"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/books", (req, res) => {
  res.send("This is book page!");
});

app.get("/book-sendfile", (req, res) => {
  res.sendFile("./page/BookTest1.html", { root: __dirname });
});

app.get("/book-ejs", (req, res, next) => {
  // res.render("Book");
  req.getConnection(function (err, conn) {
    if (err) throw err;
    conn.query("SELECT * FROM tbBuku ORDER BY id ASC", function (err, rows) {
      if (err) throw err;
      res.render("Book", { data: rows, title: "Express" });
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
