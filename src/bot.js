// Import required modules and configurations
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config({ path: "./src/config/.env" });
const { initializeBotSetup } = require("./services/botSetup");
const { setupMessageHandlers } = require("./handlers/messageHandlers");
const { getLanguages, createMainMenu } = require("./utils/languageUtils");
const config = require("./config/botConfig");
const logger = require("./utils/logger");

// Update this check
if (!config.TELEGRAM_BOT_TOKEN) {
  logger.error("TELEGRAM_BOT_TOKEN is not set in the environment variables");
  process.exit(1);
}

async function startBot() {
  try {
    const bot = await initializeBotSetup();
    const languages = getLanguages();

    setupMessageHandlers(bot, createMainMenu, languages);

    logger.info("Bot started successfully");
  } catch (error) {
    logger.error("Failed to start bot:", error);
    process.exit(1);
  }
}

startBot();
