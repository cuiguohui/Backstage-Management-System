import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            component={HomePage}
            exact
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
