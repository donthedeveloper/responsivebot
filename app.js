const express = require('express');
const app = express();

const morgan = require('morgan');
const chalk = require('chalk');

const ircServer = require('./server/irc');
const socketio = require('socket.io');
// const socketServer = require('./server/sockets');
















app.use(morgan('dev'));
app.use(express.static('browser/public'));

const server = app.listen(process.env.PORT || 3001, function() {
  console.log( chalk.blue(`App is listening on port ${this.address().port}`) );
});

const socketServer = socketio(server);

socketServer.on('connection', (socket) => {
    console.log('A new client has connected!');
    console.log(socket.id);
});





const dotenv = require('dotenv').config();
const tmi = require("tmi.js");

const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "ResponsiveBot",
        password: process.env.OAUTH
    },
    channels: ["#itsHafu"]
};

const client = new tmi.client(options);
client.connect();

client.on("message", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;

    // Handle different message types..
    switch(userstate["message-type"]) {
        case "action":
            // This is an action message..
            break;
        case "chat":
            // This is a chat message..
            const messageObj = userstate;
            messageObj.message = message;
          
            socketServer.emit('chat message', messageObj);
            break;
        case "whisper":
            // This is a whisper..
            break;
        default:
            // Something else ?
            break;
    }
});