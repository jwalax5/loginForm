import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => (
        isLoggedIn()
            ? <Component {...props} />
            : <Redirect to={`${process.env.PUBLIC_URL}/login`} />
    )} />

};

const isLoggedIn = () => {
    console.log('check user:', localStorage.getItem('user'));
    if (localStorage.getItem('user')) {
        return true;
    }
    else {
        return false;
    }
};