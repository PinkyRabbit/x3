const { NODE_ENV, PORT, DB_CONNECTION_ADDRESS, RECAPTCHA_FRONT, RECAPTCHA_BACK, SESSION_SECRET } = process.env;

const port = /\d/.test(PORT) ? Number.parseInt(PORT, 10) : 3000;
const isProduction = NODE_ENV === "production";
const dbConnectionString = DB_CONNECTION_ADDRESS || "localhost:27017/hack-it-up";
const recaptcha = RECAPTCHA_FRONT && RECAPTCHA_BACK ? { front: RECAPTCHA_FRONT, back: RECAPTCHA_BACK } : null;
const sessionSecret = SESSION_SECRET || "s3kRet";

module.exports = {
  port,
  isProduction,
  dbConnectionString,
  recaptcha,
  sessionSecret,
};
