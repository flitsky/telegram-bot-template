const path = require("path");
const fs = require("fs");

function getLanguages() {
  const languageDir = path.join(__dirname, "../languages");
  const languages = {};

  fs.readdirSync(languageDir).forEach((file) => {
    if (file.endsWith(".js")) {
      const langCode = path.basename(file, ".js");
      languages[langCode] = require(path.join(languageDir, file));
    }
  });

  return languages;
}

function createMainMenu(lang) {
  const languages = getLanguages();
  return {
    reply_markup: {
      keyboard: [
        [languages[lang].menu.hello, languages[lang].menu.help],
        [languages[lang].menu.info, languages[lang].menu.settings],
      ],
      resize_keyboard: true,
      one_time_keyboard: false,
    },
  };
}

module.exports = { getLanguages, createMainMenu };
