import { createStore, applyMiddleware, compose } from 'redux';
import thunk                                     from 'redux-thunk';
import rootReducer                               from '../reducers/index';

const stateStructure = {
  messages: [],
  connection: {}
};

const middleware = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(rootReducer, stateStructure, middleware);
export default store;
