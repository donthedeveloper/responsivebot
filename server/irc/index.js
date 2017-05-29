// const dotenv = require('dotenv').config();
// const tmi = require("tmi.js");

// const options = {
//     options: {
//         debug: false
//     },
//     connection: {
//         reconnect: true
//     },
//     identity: {
//         username: "ResponsiveBot",
//         password: process.env.OAUTH
//     },
//     channels: ["#a_seagull"]
// };

// const client = new tmi.client(options);
// client.connect();

// client.on("message", function (channel, userstate, message, self) {
//     // Don't listen to my own messages..
//     if (self) return;

//     // Handle different message types..
//     switch(userstate["message-type"]) {
//         case "action":
//             // This is an action message..
//             break;
//         case "chat":
//             // This is a chat message..
//             console.log(message);
//             break;
//         case "whisper":
//             // This is a whisper..
//             break;
//         default:
//             // Something else ?
//             break;
//     }
// });