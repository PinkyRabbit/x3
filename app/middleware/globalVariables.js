const Categories = require("../db/categories");
const Tags = require("../db/tags");

const applyGlobalVariables = (app) => {
  app.use((req, res, next) => {
    res.locals.scripts = {};
    res.locals.scripts.custom = [];
    res.locals.isAdmin = !!req.user;
    return next();
  });

  app.get("*", async (req, res, next) => {
    res.locals.categories = await Categories.getAllCategories().then((categories) =>
      categories.map(({ name, slug }) => ({ name, slug })),
    );
    res.locals.fiveRandomTags = await Tags.getFiveRandom();
    return next();
  });
};

module.exports = { applyGlobalVariables };
