const path = require("path");
const helmet = require("helmet");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const passport = require("passport");

const { isProduction } = require("../config");
const sessions = require("./sessions");
const compression = require("./compression");

require("./authentication").init();

const initMiddleware = (app) => {
  if (isProduction) {
    app.use(helmet());
    compression(app);
  } else {
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Credentials", true);
      res.header("Access-Control-Allow-Origin", req.headers.origin);
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
      res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
      next();
    });
  }

  // view engine setup
  app.set("views", path.join(__dirname, "..", "pages"));
  app.set("view engine", "twig");

  // body parser
  app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
  app.use(bodyParser.json());

  sessions(app);
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(favicon(path.join(__dirname, "../..", "public", "favicon.png")));
};

module.exports = { initMiddleware };
