const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  short_url: { type: Number },
  original_url: { type: String, unique: true, required: true },
});

const Url = mongoose.model("url", schema);

module.exports = Url;
