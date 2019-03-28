import React, { Component } from 'react';
import './_style/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './_component';
import { LoginPage, RegistrationPage, HomePage } from './_view';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row justify-content-center align-items-center">
          <div className="col col-6">
            <BrowserRouter>
              <Switch>
                <ProtectedRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegistrationPage} />
                <ProtectedRoute path="/home" component={HomePage} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
