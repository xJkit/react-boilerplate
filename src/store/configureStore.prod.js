import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from 'middleware/api';
import rootReducers from 'reducers';

function configureStore() {
  const store = createStore(
    rootReducers,
    applyMiddleware(thunk, api)
  );
  return store;
}

export default configureStore;
