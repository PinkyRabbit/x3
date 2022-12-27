const { NODE_ENV, PORT, DB_CONNECTION_ADDRESS } = process.env;

const port = /\d/.test(PORT) ? Number.parseInt(PORT, 10) : 3000;
const loggerLevel = NODE_ENV === "production" ? "error" : "debug";
const dbConnectionString = DB_CONNECTION_ADDRESS || "localhost:27017/hack-it-up";

module.exports = {
  port,
  loggerLevel,
  dbConnectionString,
};
