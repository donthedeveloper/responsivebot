import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {axios} from 'axios';
import store from './store.jsx';

import ChatContainer from './chat/components/ChatContainer.jsx';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/' component={ChatContainer} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);