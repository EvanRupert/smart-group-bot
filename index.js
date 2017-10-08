'use strict'

var http = require('http');
var fs = require('fs');
var path = require('path');

const TeleBot = require('telebot')

const bot = new TeleBot(
{
	token: '457195654:AAHVNzh7SVXQr1wpLKw75x_7h_snj1IlA5Y', // Required. Telegram Bot API token.

	polling: { // Optional. Use polling.
		interval: 1000, // Optional. How often check updates (in ms).
		timeout: 0, // Optional. Update polling timeout (0 - short polling).
		limit: 100, // Optional. Limits the number of updates to be retrieved.
		retryTimeout: 5000 // Optional. Reconnecting timeout (in ms).
	}
});

http.createServer(function (request, response) {
	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.end('walrus', 'utf-8');
}).listen(process.env.PORT || 5000);

	
bot.on(/^\/name (.+)$/, (msg, props) => {
	let name = props.match[1];
	const id = msg.chat.id
	bot.sendMessage(id, name)
	bot.setChatTitle(id, name)

//bot.on(['/start','/hello'], (msg) => {
//	bot.sendMessage(msg.from.id, 'Please enter your event name')
});

bot.on(/^\/location (.+)$/, (msg, props) => {
	let location = props.match[1];
	bot.sendMessage(msg.from.id, location)
});

bot.on(/^\/date (.+)$/, (msg, props) => {
	let date = props.match[1];
	bot.sendMessage(msg.from.id, date)
});



	

var reminders = []



/************************Start*********************/


bot.on('text', (msg) => msg.reply.text(msg.text));


bot.start();
