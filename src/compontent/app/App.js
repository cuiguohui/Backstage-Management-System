import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../main/Main';

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
            component={MainPage}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
