import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter, Route} from 'react-router';
import {Provider} from 'react-redux';
import {axios} from 'axios';
import store from './store.jsx';

import ChatContainer from './chat/index.jsx';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route path='/' component={ChatContainer} />
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);