import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/* import custom reducers below */

const rootReducers = combineReducers({
  routing: routerReducer,
});

export default rootReducers;
