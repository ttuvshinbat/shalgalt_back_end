const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = 3001;
const cors = require("cors");
const connection = require("./database");
const apiRoute = require("./routes/api");
app.use(express.json());
app.use(cors());

app.post("/", function requestHandle(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Content-Type", "application/json");
});
app.use("/api", apiRoute);
app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "cant find",
  });
});

app.listen(port, () => console.log(`example ${port}`));
