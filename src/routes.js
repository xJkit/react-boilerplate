import React from 'react';
import { Route } from 'react-router';

// Load Container Pages
import { App, NotFound } from 'containers';

// Root Path
const ROOT = '/';

// routes
const routes = (
  <Route path={ROOT} component={App}>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
