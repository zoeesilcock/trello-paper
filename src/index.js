import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import trelloPaperApp from './reducers';
import store from './store';

if (__DEV__) {
  let Dev = require('./components/dev')(store);

  ReactDOM.render(
    <Dev />,
    document.getElementById('devtools')
  );
}

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('app')
);
