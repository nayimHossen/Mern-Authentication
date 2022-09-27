const express = require("express");
const connectDatabase = require("./db/dbConn");
const app = express();
const port = 5000;

connectDatabase();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
