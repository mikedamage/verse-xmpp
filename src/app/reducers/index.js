import { combineReducers } from 'redux';
import messages from './messages';
import connection from './connection';

const rootReducer = combineReducers({
  messages,
  connection
});

export default rootReducer;
