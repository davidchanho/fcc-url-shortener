const models = require("../models");
const isURL = require("validator/lib/isURL");

module.exports.getUrl = async function (req, res) {
  const short_url = req.params.short_url;

  await models.Url.findOne({ short_url })
    .then((model) => res.redirect(model.original_url))
    .catch((err) => res.status(422).json(err));
};

module.exports.addUrl = async function (req, res) {
  const short_url = await models.Url.count();
  const original_url = req.body.url;

  if (!isURL(original_url)) {
    return res.status(422).json({ error: "invalid url" });
  }

  const findUrl = await models.Url.findOne({ original_url });

  if (findUrl) {
    return res.json({
      original_url: findUrl.original_url,
      short_url: findUrl.short_url,
    });
  }

  await models.Url.create({ original_url, short_url })
    .then(() => res.json({ original_url, short_url }))
    .catch((err) => res.json(err));
};
