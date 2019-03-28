import React, { Component } from 'react';
import './_style/App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './_component';
import { LoginPage, RegistrationPage, HomePage } from './_view';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row justify-content-center align-items-center">
          <div className="col col-6">
            <HashRouter>
              <Switch>
                <ProtectedRoute exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
                <Route exact path={`${process.env.PUBLIC_URL}/login`} component={LoginPage} />
                <Route exact path={`${process.env.PUBLIC_URL}/register`} component={RegistrationPage} />
                <ProtectedRoute exact path={`${process.env.PUBLIC_URL}/home`} component={HomePage} />
              </Switch>
            </HashRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
