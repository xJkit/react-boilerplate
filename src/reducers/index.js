import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import step from './step';

const rootReducers = combineReducers({
  routing: routerReducer,
  step,
});

export default rootReducers;
