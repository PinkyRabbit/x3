const session = require("express-session");
const { sessionSecret } = require("../config");

module.exports = (app) => {
  app.use(
    session({
      name: "hack-it-up-session",
      resave: true,
      secret: sessionSecret,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
        secure: "auto",
        sameSite: true,
      },
    }),
  );
};
