require('dotenv').config();
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');

// Инициализация бота
const bot = new TelegramBot(config.marketBot.token, { polling: true });

// ... код бота ...

// Веб-сервер для Render
const app = express();
const PORT = process.env.PORT || 3000
