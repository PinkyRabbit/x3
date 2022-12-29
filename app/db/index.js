const monk = require("monk");

const { dbConnectionString, isProduction } = require("../config");

const connectionTest = () =>
  monk(dbConnectionString, {
    serverSelectionTimeoutMS: 1000,
  }).then(() => {
    console.log("Monk connected.");
  });

const options = {
  loggerLevel: isProduction ? "error" : "debug",
};

module.exports = {
  connectionTest,
  mongodbId: (_id) => monk.id(_id),
  dbConnectionString,
  options,
  User: monk(dbConnectionString, options).get("user"),
  Post: monk(dbConnectionString, options).get("post"),
  Error: monk(dbConnectionString, options).get("error"),
};
