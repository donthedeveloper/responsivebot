const express = require('express');
const app = express();
const tmi = require("tmi.js");
const morgan = require('morgan');
const chalk = require('chalk');

// const router = require('./server/routes');
const dotenv = require('dotenv').config();

var options = {
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
    channels: ["#stpeach"]
};

const client = new tmi.client(options);
client.connect();



// client.on("chat", function (channel, userstate, message, self) {
//     // Don't listen to my own messages..
//     if (self) return;

//     // Do your stuff.
//     // console.log('\nchannel:', channel);
//     // console.log('\nuserstate:', userstate);
//     console.log('\nmessage:', message);
//     // console.log('\nself:', self);
// });

app.use(morgan('dev'));

// app.use(express.static('server/templates'));
app.use(express.static('browser/public'));

// app.use('/', router);

app.listen(process.env.PORT || 3001, function() {
  console.log( chalk.blue(`App is listening on port ${this.address().port}`) );
});