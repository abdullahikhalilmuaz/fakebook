const express = require("express");
const messageRouter = express.Router();
const fs = require("fs");
//@desc: creating an GET API end point for public messages
messageRouter.get("/message", (req, res) => {
  fs.readFile("./models/messages.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error loading data files" });
    } else {
      res.send(data);
    }
  });
});

//@desc: creating a POST API endpoint for public messages

messageRouter.post("/message", (req, res) => {
  fs.readFile("./models/messages.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error loading data files" });
    } else {
      const jsonData = JSON.parse(data);
      jsonData.push(req.body);
      fs.writeFile(
        "./models/messages.json",
        JSON.stringify(jsonData, null, 2),
        (err) => {
          if (err) {
            console.log(err);
            res.status(400).send({ message: "Failed to make a POST request" });
          } else {
            res.status(200).send({ message: JSON.parse(data) });
          }
        }
      );
    }
  });
});
module.exports = messageRouter;
