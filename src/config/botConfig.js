const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

module.exports = {
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
  defaultLanguage: process.env.DEFAULT_LANGUAGE || "en",
  logging: {
    level: process.env.LOG_LEVEL || "info",
  },
};
