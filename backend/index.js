const express = require("express");

const cors = require("cors");
// const { app } = require("express");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 5000;
const app = express();
app.use(bodyParser.json());
const allTasks = [
  {
    id: 1,
    task: "sleep",
  },
  {
    id: 2,
    task: "Watch anime",
  },
];
app.get("/tasks", function (req, res) {
  return res.json(allTasks);
});
app.post("/tasks", function (req, res) {
  const body = req.body;
  let random = Math.floor(Math.random() * 1000);
  body["id"] = random;
  allTasks.push(body);
  return res.status(201).json(allTasks);
});
app.delete("/tasks/:id", function (req, res) {
  let id = Number(req.params("id"));
  let requireElements = [];
  for (let i = 0; i < allTasks.length; i++) {
    if (allTasks[i].id != id) requireElements.push(allTasks[i]);
  }
  allTasks = JSON.parse(JSON.stringify(requireElements));
  return res.status(201).json({ message: "Deleted Sucessfully" });
});

app.listen(port, () => {
  console.log("Server is running at port 5000");
});
