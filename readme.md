# Telegram Bot Project Template

This repository provides a robust and scalable template for creating a Telegram bot using Node.js. It features a modular architecture designed for easy maintenance and future expansion.

## Project Structure

The project is organized as follows:

```
src/
  ├── config/
  │   ├── .env                # Environment variables
  │   └── botConfig.js        # Bot configuration
  ├── handlers/
  │   └── messageHandlers.js  # Message handling logic
  ├── languages/
  │   ├── en.js               # English language strings
  │   └── ko.js               # Korean language strings
  ├── services/
  │   ├── botSetup.js         # Bot initialization
  │   └── languageService.js  # Multi-language support
  ├── utils/
  │   ├── logger.js           # Logging utility
  │   └── languageUtils.js    # Language-related utilities
  └── bot.js                  # Main entry point
```

### Key Components:

1. **config/**

   - `.env`: Stores sensitive information and configuration variables.
   - `botConfig.js`: Centralizes bot-specific settings for easy management.

2. **handlers/**

   - `messageHandlers.js`: Contains logic for processing incoming messages and commands.

3. **languages/**

   - Language-specific files (e.g., `en.js`, `ko.js`) for multi-language support.

4. **services/**

   - `botSetup.js`: Manages the bot's initialization process.
   - `languageService.js`: Handles language-related operations for internationalization.

5. **utils/**

   - `logger.js`: Provides a consistent logging interface across the application.
   - `languageUtils.js`: Offers utility functions for language-related tasks.

6. **bot.js**
   - The main entry point that ties all components together and starts the bot.

## Features

- **Modular Architecture**: Enhances code organization and maintainability.
- **Multi-language Support**: Built-in internationalization capabilities.
- **Environment-based Configuration**: Uses `.env` for secure and flexible configuration.
- **Robust Error Handling**: Centralized error logging for easier debugging.
- **Scalable Message Handling**: Easily extendable to accommodate new commands and features.

## Getting Started

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up your environment:

   - Copy `src/config/.env.example` to `src/config/.env`
   - Edit `src/config/.env` and add your Telegram Bot Token:
     ```
     TELEGRAM_BOT_TOKEN=your_bot_token_here
     ```

4. Start the bot:
   ```
   npm start
   ```

## Dependencies

Key dependencies include:

- `node-telegram-bot-api`: For interacting with the Telegram Bot API.
- `dotenv`: For loading environment variables.
- `winston`: For advanced logging capabilities.

Install all dependencies with:

```bash
npm install
```

## Customization

- Add new message handlers in `src/handlers/messageHandlers.js`.
- Extend language support by adding new files in `src/languages/`.
- Modify `src/config/botConfig.js` for bot-wide settings.
- Implement additional services in `src/services/` for new functionalities.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open-source and available under the [MIT License](LICENSE).
