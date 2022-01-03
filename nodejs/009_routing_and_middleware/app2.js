const express = require("express");
const indexRouter = require("./router"); //index.js는 생략 가능

const blogRouter = require("./router/app2blog");

const app = express();

app.use("/", indexRouter);
app.use("/blog", blogRouter);


app.use((req, res, next) => {
  res.status(404).send("not found");
});

app.use((err, req, res, next) => {
  console.log("에러발생");
  console.log(err);
});

app.listen(8080);
