const logger = require("../utils/logger");
const config = require("../config/botConfig");

const setupMessageHandlers = (bot, createMainMenu, languages) => {
  function getUserLanguage(chatId) {
    // 실제 구현에서는 데이터베이스에서 사용자별 설정을 가져와야 합니다.
    return config.defaultLanguage;
  }

  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const lang = getUserLanguage(chatId);
    bot.sendMessage(chatId, languages[lang].welcome, createMainMenu(lang));
  });

  bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const lang = getUserLanguage(chatId);
    logger.debug("Received message:", msg.text);

    const handlers = {
      [languages[lang].menu.hello.toLowerCase()]: () => {
        bot.sendMessage(chatId, "안녕하세요! 반갑습니다.");
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

    const handler = handlers[msg.text.toString().toLowerCase()];
    if (handler) {
      handler();
    }
  });
};

module.exports = { setupMessageHandlers };
