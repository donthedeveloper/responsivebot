var tmi = require("tmi.js");
require('dotenv').config();

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
    channels: ["#donthedeveloper"]
};

var client = new tmi.client(options);

// Connect the client to the server..
client.connect();

client.on("chat", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;

    // Do your stuff.
    // console.log('\nchannel:', channel);
    // console.log('\nuserstate:', userstate);
    console.log('\nmessage:', message);
    // console.log('\nself:', self);
});