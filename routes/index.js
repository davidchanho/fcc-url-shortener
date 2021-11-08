const express = require("express");
const urlsApi = require("./api/urls.api");

const router = express.Router();

router.use("/shorturl", urlsApi);

module.exports = router;
