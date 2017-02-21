import fetch from 'isomorphic-fetch';
import { HTTP, API_ROOT } from 'config';

export const CALL_API = Symbol('call api');

function actionWithOptions(action, options) {
  const finalAction = Object.assign({}, action, options);
  delete finalAction[CALL_API];
  return finalAction;
}

const apiMiddleware = store => next => action => {
  if (!action[CALL_API]) {
    return next(action);
  }
  const [requestType, successType, failureType] = action[CALL_API].types;
  const { endpoint, method = HTTP.GET, body = {} } = action[CALL_API];
  const config = {
    method,
    headers: {
      'Content-type': 'application/json',
    },
  };
  // async actions kick off and return a promise
  next(actionWithOptions(action, { type: requestType }));
  switch (method) {
    case HTTP.GET:
      return fetch(API_ROOT + endpoint, config)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(response.json());
        }
        return response.json();
      })
      .then(json => next(actionWithOptions(action, {
        type: successType,
        payload: json,
      })))
      .catch(err => next(actionWithOptions(action, {
        type: failureType,
        error: err,
      })));
    case HTTP.POST:
      config.body = JSON.stringify(body);
      return fetch(API_ROOT + endpoint, config)
      .then(response => {
        if (!response.ok) {
          throw new Error('response is not OK');
        }
        return response.json();
      })
      .then(json => next(actionWithOptions(action, {
        type: successType,
        payload: json,
      })))
      .catch(err => next(actionWithOptions(action, {
        type: failureType,
        payload: err,
      })));
    default:
      throw new Error('method not recognized.');
  }
};

export default apiMiddleware;
