const express = require("express");
const route = express.Router();
const path = require("path");
const fs = require("fs");

//doc file json

const pathQuestion = path.join(
  __dirname,
  "../ask-community-project/questions.json"
);

route.route("/").get((req, res) => {
  fs.readFile(pathQuestion, (err, data) => {
    if (err) {
      res.status(500).send("ko co data");
    }
    const convertData = JSON.parse(data);
    return res.status(200).json(convertData);
  });
});

route.route("/:id").get((req, res) => {
  const id = req.params.id;
  fs.readFile(pathQuestion, (err, data) => {
    if (err) {
      res.status(500).send("ko co data");
    }
    const convertData = JSON.parse(data);
    const finalData = convertData.find((question) => question.id == id);

    res.status(200).json(finalData);
  });
});

//like and dislike
route.route("/like/:id").put((req, res) => {
  const id = req.params.id;
  fs.readFile(pathQuestion, (err, data) => {
    if (err) {
      res.status(500).send("ko co data");
    }
    const convertData = JSON.parse(data);
    const indexQuestion = convertData.findIndex(
      (question) => question.id == id
    );
    convertData[indexQuestion].like += 1;
    fs.writeFile(pathQuestion, JSON.stringify(convertData), (err) => {
      if (err) {
        res.status(400).send("ko the luu data");
      }
    });
    res.status(200).json(convertData);
  });
});
route.route("/dislike/:id").put((req, res) => {
  const id = req.params.id;
  fs.readFile(pathQuestion, (err, data) => {
    if (err) {
      res.status(500).send("ko co data");
    }
    const convertData = JSON.parse(data);
    const indexQuestion = convertData.findIndex(
      (question) => question.id == id
    );
    convertData[indexQuestion].dislike += 1;
    fs.writeFile(pathQuestion, JSON.stringify(convertData), (err) => {
      if (err) {
        res.status(400).send("ko the luu data");
      }
    });
    res.status(200).json(convertData);
  });
});

//details

module.exports = route;
