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
})