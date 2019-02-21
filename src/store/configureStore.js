import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from '../reducers';
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';



const initialState = {};
const middleware = [thunk ];
const enhancers = [];

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export let store = createStore(
  persistedReducer,
  initialState,
  composedEnhancers
);
export let persistor = persistStore(store);
