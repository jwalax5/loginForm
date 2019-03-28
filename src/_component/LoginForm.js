import React from 'react';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../_component';

export const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <h1>Login</h1>
            </div>
            <div className="form-group">
                <label htmlFor="loginFormEmail">Email address</label>
                <input id="loginFormEmail" type="text" className={"form-control " + (!props.isPristine ? ((props.invalid.loginFormEmail) ? 'is-invalid' : 'is-valid') : '')} placeholder="Enter email" />
                <div className="invalid-feedback">{props.invalid.loginFormEmailErrMsg}</div>
            </div>
            <div className="form-group">
                <label htmlFor="loginFormPassword">Password</label>
                <input id="loginFormPassword" type="password" className={"form-control " + (!props.isPristine ? ((props.invalid.loginFormPassword) ? 'is-invalid' : 'is-valid') : '')} placeholder="Enter password" />
                <div className="invalid-feedback">{props.invalid.loginFormPasswordErrMsg}</div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="submit" className="btn btn-primary">Sign In</button>
                    <Link to="/register" className="marginLeft10">Register</Link>
                    <LoadingSpinner show={props.showSpinner} />
                </div>
            </div>
        </form>
    )
};
