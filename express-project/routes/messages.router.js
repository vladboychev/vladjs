const express = require('express');

const messagesController = require('../controllers/messages.controller');

const messagesRauter = express.Router();

messagesRauter.get('/', messagesController.getMessages);
messagesRauter.post('/', messagesController.postMessage);

module.exports = messagesRauter;