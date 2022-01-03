const express = require("express");
const indexRouter = require("./router"); //index.js는 생략 가능

const aRouter = require("./router/a.js");
const bRouter = require("./router/b.js");
const cRouter = require("./router/c.js");

const app = express();

app.use("/", indexRouter);
app.use("/a", aRouter);
app.use("/b", bRouter);
app.use("/c", cRouter);


app.use((req, res, next) => {
  res.status(404).send("not found");
});

app.use((err, req, res, next) => {
  console.log("에러발생");
  console.log(err);
})

app.listen(8080);
