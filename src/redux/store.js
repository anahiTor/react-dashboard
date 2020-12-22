import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.getState = store.getState;

export const getStoreState = store.getState;

export default store;