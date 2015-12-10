import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage'

import slicer from './storage_slicer';
import rootReducer from './reducers';

const createStoreWithMiddleware = compose(
  persistState(['boards', 'cards', 'cardStates', 'lists', 'organizations'], { slicer: slicer }),
  applyMiddleware(thunk)
)(createStore);

export default createStoreWithMiddleware(rootReducer);
