import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <h1>Registration</h1>
            </div>
            <div className="form-group">
                <label htmlFor="regFormUsername">Username</label>
                <input type="text" className={"form-control " + (!props.isPristine ? ((props.invalid.regFormUsername) ? 'is-invalid' : 'is-valid') : '')} id="regFormUsername" placeholder="Enter Username" />
                <div className="invalid-feedback">{props.invalid.regFormUsernameErrMsg}</div>
            </div>
            <div className="form-group">
                <label htmlFor="regFormEmail">Email address</label>
                <input type="text" className={"form-control " + (!props.isPristine ? ((props.invalid.regFormEmail) ? 'is-invalid' : 'is-valid') : '')} id="regFormEmail" placeholder="Enter email" />
                <div className="invalid-feedback">{props.invalid.regFormEmailErrMsg}</div>
            </div>
            <div className="form-group">
                <label htmlFor="regFormPhoneNo">Phone no.</label>
                <input type="text" className={"form-control " + (!props.isPristine ? ((props.invalid.regFormPhoneNo) ? 'is-invalid' : 'is-valid') : '')} id="regFormPhoneNo" placeholder="Enter Phone no" />
                <div className="invalid-feedback">{props.invalid.regFormPhoneNoErrMsg}</div>
            </div>
            <div className="form-group">
                <label htmlFor="regFormPassword">Password</label>
                <input type="password" className={"form-control " + (!props.isPristine ? ((props.invalid.regFormPassword) ? 'is-invalid' : 'is-valid') : '')} id="regFormPassword" placeholder="Enter Password" />
                <div className="invalid-feedback">{props.invalid.regFormPasswordErrMsg}</div>
            </div>
            <div className="form-group">
                <label htmlFor="regFormConfirmedPassword">Confirmed Password</label>
                <input type="password" className={"form-control " + (!props.isPristine ? ((props.invalid.regFormConfirmedPassword) ? 'is-invalid' : 'is-valid') : '')} id="regFormConfirmedPassword" placeholder="Enter Password" />
                <div className="invalid-feedback">{props.invalid.regFormConfirmedPasswordErrMsg}</div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="submit" className="btn btn-primary">Register</button>
                    <Link to="/login" className="marginLeft10" >back</Link>
                </div>
            </div>
        </form>
    )
};
