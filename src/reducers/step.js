import * as Types from 'actions/ActionTypes';
import { STEPS } from 'config';

const stepReducer = (state = STEPS[0], action) => {
  switch (action.type) {
    case Types.STEP_CHANGE:
      return action.step;
    default:
      return state;
  }
};

export default stepReducer;
