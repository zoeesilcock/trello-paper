import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import trelloPaperApp from './reducers';
import store from './store';

let devTools = '';

if (__DEV__) {
  let DevTools = require('./components/dev_tools');

  devTools = (
    <DevTools />
  );
}

ReactDOM.render(
  <div>
    <Provider store={store}>
      <div>
        <App />
        {devTools}
      </div>
    </Provider>
  </div>,
  document.getElementById('app')
);
