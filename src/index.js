import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

import MainContainer from './containers/MainContainer';

import './index.css';

const root = document.createElement('div');
root.id = 'root';

document.body.appendChild(root);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainContainer />
    </PersistGate>
  </Provider>,
  root
);
