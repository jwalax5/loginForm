import React, { Component } from 'react';
import { LoginForm } from '../_component';
import { UserService } from '../_service';


class LoginPage extends Component {

  state = {
    invalid: {
      loginFormEmail: false,
      loginFormEmailErrMsg: "Email is required",
      loginFormPassword: false,
      loginFormPasswordErrMsg: "Password is required",
    },
    isPristine: true,
    showSpinner: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const error = { ...this.state.invalid };
    error.loginFormEmail = !e.target.loginFormEmail.value;
    error.loginFormPassword = !e.target.loginFormPassword.value;

    if (e.target.loginFormEmail.value) {
      if ((e.target.loginFormEmail.value.split("").filter(x => x === "@").length !== 1) || (e.target.loginFormEmail.value.indexOf(".") === -1)) {
        error.loginFormEmail = true;
        error.loginFormEmailErrMsg = "Email format is invalid";
      }
    }

    if (!error.loginFormEmail && !error.loginFormPassword) {
      this.setState({ ...this.state, showSpinner: true });
      UserService.login(e.target.loginFormEmail.value, e.target.loginFormPassword.value).then(loginResult => {
        this.setState({ ...this.state, showSpinner: false });
        if (!loginResult) {
          error.loginFormEmail = true;
          error.loginFormPassword = true;
          error.loginFormEmailErrMsg = "Invalid credentials";
          this.setState({
            invalid: error,
            isPristine: false
          });
        } else {
          console.log(loginResult);
          localStorage.setItem('user', loginResult.name);
          this.props.history.push('/home');
        }
      });
    } else {
      this.setState({
        invalid: error,
        isPristine: false
      });
    }
  }

  render() {
    return (
      <div>
        <LoginForm showSpinner={this.state.showSpinner} invalid={this.state.invalid} isPristine={this.state.isPristine} handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export { LoginPage };