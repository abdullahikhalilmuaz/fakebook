const express = require("express");
const postRoutes = express.Router();
const fs = require("fs");

//@desc: creating an API endpoint to handle to GET request to all posts for feeds
postRoutes.get("/post", (req, res) => {
  fs.readFile("./models/post.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Intenal server error, Failed to load data files!");
    } else {
      res.status(200).send(data);
    }
  });
});

//@desc: creating an API endpoint to handle the POST request to all posts for feeds

postRoutes.post("/post", (req, res) => {
  res.json(req.body);

  fs.readFile("./models/post.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Internal server error || error loading file data!" });
    } else {
      const jsonData = JSON.parse(data);
      jsonData.push(req.body);

      fs.writeFile(
        "./models/post.json",
        JSON.stringify(jsonData, null, 2),
        (error) => {
          if (error) {
            res.status(400).send({ message: "Failed to save file" });
          }
        }
      );
    }
  });
});

module.exports = postRoutes;
