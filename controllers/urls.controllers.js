const models = require("../models");

const isUrl = require("../helper/isUrl");

module.exports.getUrl = async function (req, res) {
  const short_url = req.params.short_url;

  await models.Url.findOne({ short_url })
    .then((model) => res.redirect(model.original_url))
    .catch((err) => res.json(err));
};

module.exports.addUrl = async function (req, res) {
  const short_url = await models.Url.count();
  const original_url = req.body.url;

  if (!isUrl(original_url)) {
    return res.json({ error: "invalid url" });
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
