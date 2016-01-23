'use strict';

var TelegramBot = require('node-telegram-bot-api');
var startText = 'Ask me something!'
var answers = ['Yes', 'No', 'May be', '42'];

var getAnswer = function() {
  return answers[Math.floor(Math.random() * answers.length)]
};

module.exports.setup = function(event, cb) {
  if (!process.env.TELEGRAM_TOKEN) return cb("TELEGRAM_TOKEN env var not set");
  if (!process.env.WEBHOOK_URL) return cb("WEBHOOK_URL env var not set");
  var bot = new TelegramBot(process.env.TELEGRAM_TOKEN);

  bot.setWebHook(process.env.WEBHOOK_URL).then(function(response) {
    var response = {
      result: {
        setWebHook: response
      }
    };

    return cb(null, response);
  }).catch(cb);
};

module.exports.process = function(event, cb) {
  if (!process.env.TELEGRAM_TOKEN) return cb("TELEGRAM_TOKEN env var not set");
  var bot = new TelegramBot(process.env.TELEGRAM_TOKEN);
  var text;
  var chatId = event.message.chat.id;

  if (event.message.text === '/start') {
    text = startText;
  } else {
    text = getAnswer();
  }
  return bot.sendMessage(chatId, text).asCallback(cb);
};