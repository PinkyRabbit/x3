const log4js = require("log4js");
const path = require("path");
const { isProduction } = require("../config");

const FILENAME = path.resolve(__dirname, "../../app.log");

log4js.configure({
  appenders: {
    out: {
      type: "stdout",
    },
    toFile: { type: "file", filename: FILENAME },
  },
  categories: {
    default: {
      appenders: ["out"],
      level: "debug",
    },
    production: {
      appenders: ["toFile"],
      level: "error",
    },
  },
});

const loggerType = isProduction ? "production" : "default";
const logger = log4js.getLogger(loggerType);

module.exports = logger;
