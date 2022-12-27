const monk = require("monk");

const { dbConnectionString, loggerLevel } = require("../config");

const connectionTest = () =>
  monk(dbConnectionString, {
    serverSelectionTimeoutMS: 1000,
  }).then(() => {
    console.log("Monk connected.");
  });

const options = {
  loggerLevel,
};

module.exports = {
  connectionTest,
  mongodbId: (_id) => monk.id(_id),
  User: monk(dbConnectionString, options).get("user"),
  Post: monk(dbConnectionString, options).get("post"),
  Category: monk(dbConnectionString, options).get("category"),
  Tag: monk(dbConnectionString, options).get("tag"),
  Error: monk(dbConnectionString, options).get("error"),
};
