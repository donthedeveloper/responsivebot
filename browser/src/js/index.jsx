import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {axios} from 'axios';
import store from './store.jsx';

import ChatContainer from './chat/components/ChatContainer.jsx';

import {add} from './chat/reducers.jsx';


import io from 'socket.io-client';

const socket = io(window.location.origin);

socket.on('connect', function () {
    console.log('I have made a persistent two-way connection to the server!');
});

socket.on('chat message', function(message) {
    // console.log(message.message);
    store.dispatch(add(message));
});


// const onChatEnter = () => {
//     store.dispatch(add())
// }

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/' component={ChatContainer} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);