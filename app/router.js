const Pages = require("./pages");
const { createError } = require("./helpers/createError");
const { applyGlobalVariables } = require("./middleware/globalVariables");

function initRoutes(app) {
  if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1);
  }
  applyGlobalVariables(app);

  app.use((req, res, next) => next(createError(404, "Страница не существует")));
  app.use(Pages.ErrorHandler);
}

module.exports = { initRoutes };
