/* eslint global-require: 0 , max-len: ["error", 120], no-console: 0 */

if (process.env.NODE_ENV === 'production') {
  if (process.env.API_ROOT) {
    console.log(`%cProduction Mode with Testing Api Server: ${process.env.API_ROOT} Activated`, 'color: blue');
  }
  module.exports = require('./configureStore.prod');
} else {
  console.log('%cDevelopment Mode Activated', 'color: green');
  module.exports = require('./configureStore.dev');
}
