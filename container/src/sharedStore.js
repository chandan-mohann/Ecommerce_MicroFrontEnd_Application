// container/src/sharedStore.js
import { createStore, combineReducers } from 'redux';

let store;

const initStore = () => {
  if (!store) {
    store = createStore(combineReducers({}));
  }
  return store;
};

const injectReducer = (key, reducer) => {
  if (store) {
    store.replaceReducer(
      combineReducers({
        ...store.reducers,
        [key]: reducer,
      })
    );
  }
};

export { initStore, injectReducer };
