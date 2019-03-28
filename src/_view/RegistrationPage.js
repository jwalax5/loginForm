import React, { Component } from 'react';
import { RegisterForm } from '../_component';
import { UserService } from '../_service';

class RegistrationPage extends Component {
    state = {
        invalid: {
            regFormUsername: false,
            regFormEmail: false,
            regFormPhoneNo: false,
            regFormPassword: false,
            regFormConfirmedPassword: false,
            regFormUsernameErrMsg: "",
            regFormEmailErrMsg: "",
            regFormPhoneNoErrMsg: "",
            regFormPasswordErrMsg: "",
            regFormConfirmedPasswordErrMsg: ""
        },
        isPristine: true
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const error = { ...this.state.invalid };
        const regFormUsernameVal = e.target.regFormUsername.value;
        const regFormEmailVal = e.target.regFormEmail.value;
        const regFormPhoneNoVal = e.target.regFormPhoneNo.value;
        const regFormPasswordVal = e.target.regFormPassword.value;
        const regFormConfirmedPasswordVal = e.target.regFormConfirmedPassword.value;

        if (!regFormUsernameVal) {
            error.regFormUsername = true;
            error.regFormUsernameErrMsg = "Username is required";
        } else {
            error.regFormUsername = false;
        }

        if (!regFormEmailVal) {
            error.regFormEmail = true;
            error.regFormEmailErrMsg = "Email is required";
        }
        else {
            if ((regFormEmailVal.split("").filter(x => x === "@").length !== 1) || (regFormEmailVal.indexOf(".") === -1)) {
                error.regFormEmail = true;
                error.regFormEmailErrMsg = "Email format is invalid";
            } else {
                error.regFormEmail = false;
            }
        }

        if (!regFormPhoneNoVal) {
            error.regFormPhoneNo = true;
            error.regFormPhoneNoErrMsg = "Phone no is required";
        }
        else {
            if (isNaN(regFormPhoneNoVal)) {
                error.regFormPhoneNo = true;
                error.regFormPhoneNoErrMsg = "Phone no must be numberic";
            } else {
                error.regFormPhoneNo = false;
            }
        }

        if (!regFormPasswordVal) {
            error.regFormPassword = true;
            error.regFormPasswordErrMsg = "Password is required";
        }
        else {
            if (regFormPasswordVal.length < 6) {
                error.regFormPassword = true;
                error.regFormPasswordErrMsg = "Password length is at least 6";
            } else {
                error.regFormPassword = false;
            }
        }

        if (!regFormConfirmedPasswordVal) {
            error.regFormConfirmedPassword = true;
            error.regFormConfirmedPasswordErrMsg = "Confirmed Password is required";
        }
        else {
            if (regFormConfirmedPasswordVal !== regFormPasswordVal) {
                error.regFormConfirmedPassword = true;
                error.regFormConfirmedPasswordErrMsg = "Confirmed Password is not equal to password";
            } else {
                error.regFormConfirmedPassword = false;
            }
        }

        if (!error.regFormUsername && !error.regFormEmail && !error.regFormPhoneNo && !error.regFormPassword && !error.regFormConfirmedPassword) {
            const user = {
                name: regFormUsernameVal,
                email: regFormEmailVal,
                phoneNo: regFormPhoneNoVal,
                password: regFormPasswordVal,
                salt: 'salt'
            }
            UserService.register(user).then(newAddedUser => {
                console.log(newAddedUser);
                if (!newAddedUser) {
                    error.regFormEmail = true;
                    error.regFormEmailErrMsg = "Email already registered";
                    this.setState({
                        invalid: error,
                        isPristine: false
                    });
                } else {
                    alert("Registration Success");
                    this.props.history.push('/login');
                }
            });

        } else {
            this.setState({
                invalid: error,
                isPristine: false
            });
        }
    };

    render() {
        return (
            <div>
                <RegisterForm invalid={this.state.invalid} isPristine={this.state.isPristine} handleSubmit={this.handleSubmit.bind(this)} />
            </div>
        );
    };
}

export { RegistrationPage };