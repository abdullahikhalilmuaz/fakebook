const express = require("express");
const port = 5000;
const app = express();
const useRouter = require("./routes/users");
const postRoutes = require("./routes/post");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use("/api", useRouter);

app.use("/api", postRoutes);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
