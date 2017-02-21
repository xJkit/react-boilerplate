import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="app">
        App Container Rendered Successfully.
      </div>
    );
  }
}

export default connect()(App);
