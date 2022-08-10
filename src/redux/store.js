import { compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { appConfig } from '../config/appConfig';
import { rootReducer } from './reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    enhancers: composeEnhancers,
  });

  if (appConfig.env !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}

export const store = configureAppStore({});
