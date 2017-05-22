import React from 'react';
import io from 'socket.io-client';

const ChatContainer = (props) => {
    var socket = io(window.location.origin);

    socket.on('connect', function () {
        console.log('I have made a persistent two-way connection to the server!');
    });

    return (
        <div>hello</div>
    );
};

export default ChatContainer;