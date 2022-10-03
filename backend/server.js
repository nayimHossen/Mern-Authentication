const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database.js");

//config
dotenv.config({ path: "backend/config/config.env" });

//database connection
connectDatabase();

app.get("/", (req, res) => {
  res.json("server is working");
});

app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});
