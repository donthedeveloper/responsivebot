import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, hashHistory, IndexRoute, IndexRedirect} from 'react-router';
import {Provider} from 'react-redux';
import {axios} from 'axios';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' />
        </Router>
    </Provider>,
    document.getElementById('app')
);