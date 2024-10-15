const logger = require("../utils/logger");
const config = require("../config/botConfig");

const setupMessageHandlers = (bot, createMainMenu, languages) => {
  /**
   * Retrieves the user's language preference.
   * @param {number} chatId - The chat ID of the user.
   * @returns {string} The language code for the user.
   * @todo Implement actual user language preference storage and retrieval.
   */
  function getUserLanguage(chatId) {
    // In a production environment, this should fetch the user's language preference from a database.
    return config.defaultLanguage;
  }

  // Handler for the /start command
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const lang = getUserLanguage(chatId);
    bot.sendMessage(chatId, languages[lang].welcome, createMainMenu(lang));
  });

  // General message handler
  bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const lang = getUserLanguage(chatId);

    // Log the received message for debugging purposes
    logger.debug("Received message: " + JSON.stringify(msg, null, 2));

    // Define handlers for different menu options
    const handlers = {
      [languages[lang].menu.hello.toLowerCase()]: () => {
        bot.sendMessage(chatId, "Hello! Nice to meet you.");
      },
      helloworld: () => {
        bot.sendMessage(chatId, "Hello World!");
      },
      [languages[lang].menu.help.toLowerCase()]: () => {
        bot.sendMessage(chatId, languages[lang].help);
      },
      [languages[lang].menu.info.toLowerCase()]: () => {
        bot.sendMessage(chatId, languages[lang].info);
      },
      [languages[lang].menu.settings.toLowerCase()]: () => {
        bot.sendMessage(chatId, languages[lang].settings);
      },
    };

    // Execute the appropriate handler based on the received message
    const handler = handlers[msg.text.toString().toLowerCase()];
    if (handler) {
      handler();
    }
  });
};

module.exports = { setupMessageHandlers };
