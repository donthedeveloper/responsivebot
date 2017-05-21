import {combineReducers} from 'redux';
import post from './post';
import subscribe from './subscribe';
import user from './user';
import dropdown from './dropdown';
import comment from './comment';

const reducers = combineReducers({
  posts: post,
  subscribe,
  user,
  dropdown,
  comment
});

export default reducers;