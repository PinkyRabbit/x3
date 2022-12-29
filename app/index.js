require("./db").connectionTest();

const http = require("http");
const path = require("path");
const express = require("express");

const { port } = require("./config");
const { initMiddleware } = require("./middleware");
const { initRoutes } = require("./router");
const logger = require("./tools/logger");

logger.info(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);

const app = express();
app.use(express.static(path.join(__dirname, "../public")));

initMiddleware(app);
initRoutes(app);

app.set("port", port);
const server = http.createServer(app);
server
  .listen(port)
  .on("error", (err) => {
    if (err.code === "EACCES") {
      logger.error(`Port ${port} requires elevated privileges`);
    }
    if (err.code === "EADDRINUSE") {
      logger.error(`Port ${port} is already in use`);
    }
    throw err;
  })
  .on("listening", () => {
    logger.debug(`Server listening on port ${port}`);
  });
