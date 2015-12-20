import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage'
import { Map, fromJS } from 'immutable';

import slicer from './slicer';
import rootReducer from '../reducers';

let persistedStores = ['boards', 'cards', 'cardStates', 'lists', 'organizations', 'print_layout'];
let localStorageConfig = {
  slicer: slicer,
  serialize: (subset) => JSON.stringify(subset.toJS()),
  deserialize: (serializedData) => fromJS(JSON.parse(serializedData)),
  merge: (initialState, persistedState) => Map().mergeDeep(persistedState)
};
let createStoreWithMiddleware;

if (__DEV__) {
  let DevTools = require('../components/dev_tools').default;

  createStoreWithMiddleware = compose(
    persistState(persistedStores, localStorageConfig),
    applyMiddleware(thunk),
    DevTools.instrument()
  )(createStore);
} else {
  createStoreWithMiddleware = compose(
    persistState(persistedStores, { slicer: slicer }),
    applyMiddleware(thunk)
  )(createStore);
}

export default createStoreWithMiddleware(rootReducer);
