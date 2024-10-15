const TelegramBot = require("node-telegram-bot-api");
const config = require("../config/botConfig");
const logger = require("../utils/logger");

/**
 * Sets up and initializes the Telegram bot.
 * @returns {TelegramBot} Configured Telegram bot instance
 * @throws {Error} If TELEGRAM_BOT_TOKEN is not set in environment variables
 */
async function initializeBotSetup() {
  const token = config.TELEGRAM_BOT_TOKEN;
  if (!token) {
    throw new Error("Missing TELEGRAM_BOT_TOKEN in configuration");
  }

  const bot = new TelegramBot(token, { polling: true });
  logger.info("Bot has been successfully initialized and is now running");
  return bot;
}

module.exports = { initializeBotSetup };
