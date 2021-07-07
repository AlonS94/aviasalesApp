import { Provider } from 'react-redux';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './components/Redux';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
