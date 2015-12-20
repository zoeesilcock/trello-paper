import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import store from './store/index';

let devTools = '';

if (__DEV__) {
  let DevTools = require('./components/dev_tools').default;

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
