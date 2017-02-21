const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  const types = [REQUEST, SUCCESS, FAILURE];
  return types.reduce((acc, type) => {
    const ret = acc;
    ret[type] = `${base}_${type}`;
    return ret;
  }, {});
}

/** normal actions **/
export const STEP_CHANGE = 'STEP_CHANGE';

/** async actions **/
export const GET_ASYNC_LIST = createRequestTypes('GET_ASYNC_LIST');
