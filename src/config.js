/* eslint func-names: 0 */
const API_HOST = global.window ? `${window.location.protocol}//${window.location.hostname}` : 'http://localhost';
const API_PORT = global.window ? window.location.port : '3000';

export const API_ROOT = (function () {
  if (process.env.NODE_ENV === 'production') {
    // custom API_ROOT for Demo Mode
    return process.env.API_ROOT ? process.env.API_ROOT : `${API_HOST}:${API_PORT}`;
  }
  return 'http://localhost';
}());

export const HTTP = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  HEAD: 'HEAD',
};
