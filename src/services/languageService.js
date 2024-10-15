/**
 * LanguageService
 *
 * This file provides a service for managing multi-language support in the Telegram bot.
 * Its main purposes are:
 * 1. Loading language files dynamically
 * 2. Providing translations for given keys
 * 3. Managing user language preferences (placeholder implementations)
 *
 * This service allows the bot to easily switch between different languages,
 * making it more accessible to users from various linguistic backgrounds.
 */

const fs = require("fs");
const path = require("path");

class LanguageService {
  constructor(defaultLanguage = "en") {
    this.languages = {};
    this.defaultLanguage = defaultLanguage;
    this.loadLanguages();
  }

  loadLanguages() {
    const languagesDir = path.join(__dirname, "..", "languages");
    fs.readdirSync(languagesDir).forEach((file) => {
      if (file.endsWith(".js")) {
        const languageCode = path.basename(file, ".js");
        this.languages[languageCode] = require(path.join(languagesDir, file));
      }
    });
  }

  getText(key, lang = this.defaultLanguage) {
    const language =
      this.languages[lang] || this.languages[this.defaultLanguage];
    return this.getNestedProperty(language, key) || key;
  }

  getNestedProperty(obj, key) {
    return key.split(".").reduce((p, c) => (p && p[c] ? p[c] : null), obj);
  }

  setUserLanguage(userId, lang) {
    // TODO: Implement actual storage of user language preferences
    console.log(`Setting language for user ${userId} to ${lang}`);
  }

  getUserLanguage(userId) {
    // TODO: Implement actual retrieval of user language preferences
    console.log(`Getting language for user ${userId}`);
    return this.defaultLanguage;
  }
}

module.exports = new LanguageService();
