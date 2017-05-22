import {combineReducers} from 'redux';
import {messages} from './chat/reducers.jsx';

const reducers = combineReducers({
  messages
});

export default reducers;