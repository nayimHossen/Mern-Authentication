const app = require("./app");
const dotenv = require("dotenv");

//config
dotenv.config({ path: "backend/config/config.env" });

app.get("/", (req, res) => {
  res.json("server is working");
});

app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});
