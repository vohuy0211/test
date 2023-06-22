const express = require("express");
const app = express();
const path = require("path");
const questionRouter = require("./routes/question.route");
const compression = require("compression");

const pathQuestionDetail = path.join(
  __dirname,
  "../public/question-detail.html"
);
const indexQuestionDetail = path.join(__dirname, "../public/index.html");
const askPath = path.join(__dirname, "../public/ask.html");
//middleware
app.use(express.static("public"));
app.use(compression());
//database

//router
app.get("/", (req, res) => {
  return res.status(200).sendFile(indexQuestionDetail);
});
app.get("/question-detail/:id", (req, res) => {
  return res.status(200).sendFile(pathQuestionDetail);
});

app.get("/ask", (req, res) => {
  return res.status(200).sendFile(askPath);
});
//api router
app.use("/api/v1/questions", questionRouter);

//handle error

const port = 8000;
app.listen(port, () => {
  console.log(`Server Express running at http://localhost:${port}`);
});
