const express = require("express");
const useRouter = express.Router();
const fs = require("fs");
const { measureMemory } = require("vm");

useRouter.post("/login", (req, res) => {
  fs.readFile("./models/database.json", "utf8", (err, data) => {
    const { name, email, password, image, bio } = req.body;

    var users = [];

    if (data) {
      users = JSON.parse(data);
    }

    const existingUser = users.find((user) => {
      return user.email == email;
    });

    if (existingUser) {
      const userData = [
        existingUser.name,
        existingUser.email,
        existingUser.bio,
        existingUser.image,
      ];
      res.json(userData);
    } else {
      res.status(400).send({ message: "Invalid Email or Password" });
    }
  });
});

module.exports = useRouter;
