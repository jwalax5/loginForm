import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => (
        isLoggedIn()
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />

};

const isLoggedIn = () => {
    //later check the expired date of jwt 
    console.log('checkjwt', localStorage.getItem('user'));
    if (localStorage.getItem('user')) {
        return true;
    }
    else {
        return false;
    }
};