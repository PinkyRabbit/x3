const { PORT } = process.env;

const port = /\d/.test(PORT) ? Number.parseInt(PORT, 10) : 3000;

module.exports = {
  port,
};
