const express = require("express");
const controllers = require("../../controllers");

const router = express.Router();

router.route("/").post(controllers.urls.addUrl);

router.route("/:short_url").get(controllers.urls.getUrl);

module.exports = router;
