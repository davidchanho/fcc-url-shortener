require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./config/db");

const routes = require("./routes");

const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.use('/api', routes);

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
