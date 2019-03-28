import {handleResponse} from '../_helper';

const login = (email,password) => {
    const req = {
        method: 'POST',
        headers: { 'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
        body: 'email=' + email + '&' + 'password=' + password
    };

   // return fetch('http://localhost:8080/api/getUser',req)
    return fetch('http://loginsystembackend-env.6vzap66pmd.ap-northeast-1.elasticbeanstalk.com/api/getUser',req)
        .then(response => handleResponse(response))
        .then(json => {
            return json;
        })
}

const register = (user) => {
    const req = {
        method: 'POST',
        headers: { 'Access-Control-Allow-Origin': '*','Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    //return fetch('http://localhost:8080/api/createUser',req)
    return fetch('http://loginsystembackend-env.6vzap66pmd.ap-northeast-1.elasticbeanstalk.com/api/createUser',req)
        .then(response => handleResponse(response))
        .then(json => {
            return json;
        })
}

export const UserService = {
    login,
    register
};